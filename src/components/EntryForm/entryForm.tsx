import './entryForm.css';
import { useState, useEffect } from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';

type Props = {
  onSuccess: () => void;
};

// const CORRECT_HASH = import.meta.env.VITE_PASSWORD;
// console.log("CORRECT_HASH:", CORRECT_HASH);
const CORRECT_HASH = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; // Hash for "password"

const hashPassword = async (password: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const ATTEMPT_LIMIT = 5; // Maximum attempts before lockout
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes in milliseconds
const DATE = Date.now();

const getLockoutInfo = () => {
  const lockoutInfo = localStorage.getItem('lockoutInfo');
  return lockoutInfo ? JSON.parse(lockoutInfo) : { attempts: 0, lockoutUntil: 0 };
};

const setLockoutInfo = (attempts: number, lockoutUntil: number) => {
  localStorage.setItem('lockoutInfo', JSON.stringify({ attempts, lockoutUntil }));
};

const EntryForm = ({ onSuccess }: Props) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [lockoutInfo, setLockoutInfoState] = useState(getLockoutInfo());

  useEffect(() => {
    // Show warning if user is currently locked out (even after refresh)
    if (lockoutInfo.lockoutUntil > Date.now()) {
      setError('Too many incorrect attempts. Please try again later.');
      const timeout = setTimeout(() => {
        const updatedInfo = getLockoutInfo();
        setLockoutInfoState(updatedInfo);
        setError(''); // Clear error when lockout ends
      }, lockoutInfo.lockoutUntil - Date.now());
      return () => clearTimeout(timeout);
    } else {
      setError(''); // Clear error if not locked out
    }
  }, [lockoutInfo.lockoutUntil]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentTime = Date.now();
    if (lockoutInfo.lockoutUntil > currentTime) {
      setError('Too many incorrect attempts. Please try again later.');
      return;
    }

    const hashedInput = await hashPassword(password);

    if (hashedInput === CORRECT_HASH) {
      onSuccess();

      // Force viewport reset to remove zoom
      const viewport = document.querySelector('meta[name=viewport]');
      const original = viewport?.getAttribute('content');

      viewport?.setAttribute('content', 'width=device-width, initial-scale=1.01');
      setTimeout(() => {
        if (original) {
          viewport?.setAttribute('content', original);
        }
      }, 300);

      setLockoutInfo(0, 0); // Reset attempts on success
    } else {
      const newAttempts = lockoutInfo.attempts + 1;
      if (newAttempts >= ATTEMPT_LIMIT) {
        const lockoutUntil = currentTime + LOCKOUT_TIME;
        setLockoutInfo(newAttempts, lockoutUntil);
        setLockoutInfoState({ attempts: newAttempts, lockoutUntil });
        setError('Too many incorrect attempts. Please try again later.');
      } else {
        setLockoutInfo(newAttempts, 0);
        setLockoutInfoState({ attempts: newAttempts, lockoutUntil: 0 });
        setError('Incorrect password. Try again.');
      }
    }
  };

  return (
    <section className="entry-section">
      <div className="entry-container">
        <h1 className="entry-heading">
          Tori <span className="alt-font">& </span>Ciaran
        </h1>

        <form
          onSubmit={handleSubmit}
          className="form"
        >
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              disabled={lockoutInfo.lockoutUntil > DATE}
              autoComplete="current-password"
            />
            <button
              type="submit"
              className="submit-button"
              disabled={lockoutInfo.lockoutUntil > DATE}
            >
              <ArrowRightCircleIcon className="icon" />
            </button>
          </div>
          <div className="error-container">
            <p className="error-message">{error}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EntryForm;
