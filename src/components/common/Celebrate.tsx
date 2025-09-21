import confetti from 'canvas-confetti';
import { useEffect, useRef } from 'react';
import { NotifyProps } from '../../core/notify.types';

const Celebrate = ({ modal }: { modal: NotifyProps }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  useEffect(() => {
    if (!modal.celebrate) return;

    // Create and configure canvas
    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '2147483647';
    canvas.style.pointerEvents = 'none';

    document.body.appendChild(canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });

    // Celebration types
    const fireRealistic = () => {
      const count = 200;
      const defaults = { origin: { y: 0.7 } };

      const fire = (ratio: number, opts?: confetti.Options) =>
        myConfetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * ratio),
        });

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    };

    const fireRandom = () => {
      myConfetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      });
    };

    const fireFireworks = () => {
      const duration = 2000;
      const end = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60 };

      const interval = setInterval(() => {
        const timeLeft = end - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const count = 50 * (timeLeft / duration);

        myConfetti({
          ...defaults,
          particleCount: count,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        myConfetti({
          ...defaults,
          particleCount: count,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    };

    const fireSnow = () => {
      const duration = 2000;
      const end = Date.now() + duration;
      let skew = 1;

      const frame = () => {
        const timeLeft = end - Date.now();
        if (timeLeft <= 0) return;

        skew = Math.max(0.8, skew - 0.001);
        const ticks = Math.max(200, 500 * (timeLeft / duration));

        myConfetti({
          particleCount: 1,
          startVelocity: 0,
          ticks,
          origin: {
            x: Math.random(),
            y: Math.random() * skew - 0.2,
          },
          colors: ['#ffffff'],
          shapes: ['circle'],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(0.4, 1),
          drift: randomInRange(-0.4, 0.4),
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    const firePride = () => {
      const end = Date.now() + 2000;
      const colors = ['#bb0000', '#ffffff'];

      const frame = () => {
        if (Date.now() >= end) return;

        myConfetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors,
        });
        myConfetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors,
        });

        requestAnimationFrame(frame);
      };

      frame();
    };

    const fireBasic = () => {
      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    };

    // Celebration dispatcher
    const celebrationMap: Record<string, () => void> = {
      realistic: fireRealistic,
      random: fireRandom,
      fireworks: fireFireworks,
      snow: fireSnow,
      pride: firePride,
      basic: fireBasic,
    };

    const celebration = celebrationMap[modal.celebrationType ?? 'basic'];
    celebration?.();

    // Optional: remove canvas when modal closes
    return () => {
      if (canvas.parentElement) {
        canvas.parentElement.removeChild(canvas);
      }
    };
  }, [modal.celebrate, modal.celebrationType]);

  return null;
};

export default Celebrate;
