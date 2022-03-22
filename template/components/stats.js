export default function Stats() {
  return (
    <div className="stats u-grid-6">
      <div className="stat stat--top-left">
        <p className="stat__number">42,458+</p>
        <p className="stat__description">Customers</p>
      </div>
      <div className="stat stat--top-center">
        <p className="stat__number">4.2M</p>
        <p className="stat__description">Exclusive weapons sourced</p>
      </div>
      <div className="stat stat--top-right">
        <p className="stat__number">17,116</p>
        <p className="stat__description">Forward-thinking groups funded</p>
      </div>
      <div className="stat stat--bottom-left">
        <p className="stat__number">3.5M+</p>
        <p className="stat__description">Bodies moved</p>
      </div>
      <div className="stat stat--bottom-right">
        <p className="stat__number">4k+</p>
        <p className="stat__description">Luxury items shipped</p>
      </div>
    </div>
  );
}
