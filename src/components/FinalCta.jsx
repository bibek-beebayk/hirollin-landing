import { LINKS } from '../config'

export default function FinalCta() {
  return (
    <section className="container section">
      <div className="final">
        <h2 className="section__title">Ready to take the crown?</h2>
        <a className="btn btn--gold btn--lg" href={LINKS.play}>Play now</a>
      </div>
    </section>
  )
}
