import { useEffect, useRef } from 'react';
import Celebrate from '../components/common/Celebrate';
import { NotifyProps } from './notify.types';
import { RenderVariant } from '../components/common/RenderVariant';

const NotifyModal = ({ modal }: { modal: NotifyProps }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle lifecycle events
  useEffect(() => {
    modal.onDidOpen?.();

    // Remove focus from any background element
    (document.activeElement as HTMLElement)?.blur();

    // Focus management logic
    const container = containerRef.current;
    if (container) {
      // Find all focusable elements
      const focusableElements = container.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        // Determine which element to focus first
        let elementToFocus = focusableElements[0];

        // If focusConfirm is true, try to find the confirm button (usually the last button)
        if (modal.focusConfirm) {
          const buttons = container.querySelectorAll('button.notify-button');
          if (buttons.length > 0) {
            elementToFocus = buttons[buttons.length - 1] as HTMLElement;
          }
        }

        elementToFocus.focus();
      } else {
        // If no focusable elements, focus the container itself to trap focus
        container.focus();
      }

      // Trap focus
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          // If no focusable elements, prevent tab from leaving
          if (focusableElements.length === 0) {
            e.preventDefault();
            return;
          }

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      container.addEventListener('keydown', handleKeyDown);

      return () => {
        modal.onWillClose?.();
        container.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      // Fallback cleanup if container wasn't found
      return () => {
        modal.onWillClose?.();
      };
    }
  }, [modal, modal.onDidOpen, modal.onWillClose, modal.focusConfirm]);

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
