import { LINKS } from '../config'
import Icon, { PATHS } from './Icon'

export default function Community() {
  return (
    <section id="community" className="container section">
      <div className="section__head">
        <span className="eyebrow">Join the table</span>
        <h2 className="section__title">Don't roll alone</h2>
        <p className="section__text">
          Get updates on Telegram and hang out with other players in the Rollin community.
        </p>
      </div>

      <div className="community">
        <div className="community__card community__card--tg">
          <div className="community__icon community__icon--gold">
            <Icon d={PATHS.telegram} size={30} stroke="#2a1500" width={2} />
          </div>
          <h3 className="card__title card__title--lg">Telegram</h3>
          <p className="card__text">News, drops and quick support, straight to your phone.</p>
          <a className="btn btn--gold" href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
            Open Telegram
          </a>
        </div>

        <div className="community__card community__card--rollin">
          <div className="community__icon community__icon--ruby">
            <Icon d={PATHS.people} size={30} stroke="#fff" width={2} />
          </div>
          <h3 className="card__title card__title--lg">Rollin Community</h3>
          <p className="card__text">Talk strategy, share big wins and meet the regulars.</p>
          <a className="btn btn--outline" href={LINKS.community} target="_blank" rel="noopener noreferrer">
            Enter the community
          </a>
        </div>
      </div>
    </section>
  )
}
