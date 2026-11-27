import { LINKS } from '../config'
import Icon, { PATHS } from './Icon'

export default function Download() {
  const hasAndroid = Boolean(LINKS.android && LINKS.android.trim())
  const hasIos = Boolean(LINKS.ios && LINKS.ios.trim())
  const hasWeb = Boolean(LINKS.web && LINKS.web.trim())

  return (
    <section id="download" className="container section">
      <div className="download">
        <div className="download__copy">
          <span className="eyebrow">Get the app</span>
          <h2 className="section__title">Take Hi-Rollin with you</h2>
          <p className="section__text">
            Play directly from your phone with quick access to the full game lineup.
          </p>

          <div className="download__actions">
            {hasAndroid ? (
              <a className="btn btn--gold" href={LINKS.android} target="_blank" rel="noopener noreferrer">
                <Icon d={PATHS.download} size={20} width={2} />
                Download for Android
              </a>
            ) : (
              <button type="button" className="btn btn--gold" disabled>
                Android: coming soon
              </button>
            )}

            {hasIos ? (
              <a className="btn btn--outline" href={LINKS.ios} target="_blank" rel="noopener noreferrer">
                <Icon d={PATHS.download} size={20} width={2} />
                Download for iOS
              </a>
            ) : (
              <button type="button" className="btn btn--outline" disabled>
                iOS: coming soon
              </button>
            )}

            {hasWeb && (
              <a className="btn btn--outline" href={LINKS.web} target="_blank" rel="noopener noreferrer">
                Play on Web
              </a>
            )}
          </div>

          <div className="download__steps">
            <h3 className="download__steps-title">How to install (Android APK)</h3>
            <ol className="download__list">
              <li>Download the file.</li>
              <li>Allow installs from this source when your phone asks.</li>
              <li>Open the file and sign in.</li>
            </ol>
            <p className="download__note">Only download from this website.</p>
          </div>
        </div>

        <div className="download__visual" aria-hidden="true">
          <div className="phone">
            <div className="phone__screen">
              <span className="phone__notch" />
              <img src="/logo.png" alt="" className="phone__logo" />
              <span className="phone__badge">Hi-Rollin App</span>
              <span className="phone__bar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
