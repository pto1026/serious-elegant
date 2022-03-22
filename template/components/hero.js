import FeaturedIn from './featured-in'

export default function Hero() {
    return (
        <header className="hero">
          <div className="hero__text">
            <h1 className="hero__heading heading-primary">
              Your personal import/export service
            </h1>
            <p className="hero__paragraph">
              Whether it&apos;s cars, women, guns, drugs... We&apos;ll ship{" "}
              <span className="hero__em">anything!</span>
            </p>
            <a href="#" className="btn btn--primary">
              Request a service
            </a>
            <FeaturedIn />
          </div>
        </header>
    )
}