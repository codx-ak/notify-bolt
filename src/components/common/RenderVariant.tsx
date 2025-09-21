import { NotifyProps } from '../../core/notify.types';
import ClassicVariant from '../variants/ClassicVariant';
import DefaultVariant from '../variants/DefaultVariant';

export const RenderVariant = ({ modal }: { modal: NotifyProps }) => {
  switch (modal.variant) {
    case 'classic':
      return (
        <ClassicVariant
          modal={{
            ...modal,
            showConfirmButton: modal.showConfirmButton ?? false,
            showCancelButton: modal.showCancelButton ?? false,
            showCloseIcon: modal.showCloseIcon ?? true,
          }}
        />
      );

    case 'default':
    default:
      return (
        <DefaultVariant
          modal={{
            ...modal,
            showConfirmButton: modal.showConfirmButton ?? true,
            showCancelButton: modal.showCancelButton ?? true,
            showCloseIcon: modal.showCloseIcon ?? false,
          }}
        />
      );
  }
};
