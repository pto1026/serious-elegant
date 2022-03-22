export default function Feature({ children, src }) {
  return (
    <figure className="feature">
      <img
        src={src}
        alt="Airplane-tilt icon"
        className="feature__icon"
      />
      <p className="feature__text">
        {children}
      </p>
    </figure>
  );
}
