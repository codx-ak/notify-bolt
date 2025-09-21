import { useEffect, useRef } from 'react';
import Celebrate from '../components/common/Celebrate';
import { NotifyProps } from './notify.types';
import { RenderVariant } from '../components/common/RenderVariant';

const NotifyModal = ({ modal }: { modal: NotifyProps }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle lifecycle events
  useEffect(() => {
    modal.onDidOpen?.();
    return () => {
      modal.onWillClose?.();
    };
  }, [modal.onDidOpen, modal.onWillClose]);

  // Handle dismiss on outside click
  const handleOutsideClick = () => {
    if (modal.allowOutsideClick) {
      modal.reject?.();
    }
  };

  return (
    <>
      <Celebrate modal={modal} />
      <div
        ref={containerRef}
        tabIndex={-1}
        className={`notify-overlay ${modal.open ? 'open' : ''}`}
        onClick={handleOutsideClick}
        style={modal.style?.overlay ?? {}}
      >
        <div
          role="dialog"
          aria-modal="true"
          className={`notify-container notify-${modal.size} ${modal.animation} ${
            modal.mode === 'dark' ? 'notify-theme-dark' : ''
          }`}
          style={{
            fontFamily: modal.style?.modal?.fontFamily || '"Poppins", sans-serif',
            ...modal.style?.modal,
          }}
          onClick={(e) => e.stopPropagation()} // prevent bubbling inside
        >
          {/* Template or default variant */}
          {typeof modal.template === 'function'
            ? modal.template({ resolve: modal.resolve!, reject: modal.reject! })
            : (modal.template ?? <RenderVariant modal={modal} />)}

          {/* Timer progress bar */}
          {modal.timerProgressBar && (modal.timer ?? 0) > 0 && (
            <div
              className="notify-progress-bar"
              style={{ animationDuration: `${modal.timer}ms` }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NotifyModal;
