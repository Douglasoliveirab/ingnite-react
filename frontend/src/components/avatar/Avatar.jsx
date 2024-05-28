import styleAvatar from './Avatar.module.css';

export function Avatar({ hasBorder, src }) {
  return (

    <img
      src={src}
      alt="profile"
      className={hasBorder ? styleAvatar.avatar : styleAvatar.avatarWithBorder}
    />

  );
}
