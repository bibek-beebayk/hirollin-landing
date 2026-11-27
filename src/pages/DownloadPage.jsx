import Header from '../components/Header'
import Footer from '../components/Footer'
import Icon, { PATHS } from '../components/Icon'
import { LINKS } from '../config'

export default function DownloadPage() {
  const hasAndroid = Boolean(LINKS.android && LINKS.android.trim())
  const hasIos = Boolean(LINKS.ios && LINKS.ios.trim())
  const hasWeb = Boolean(LINKS.web && LINKS.web.trim())

  return (
    <>
      <Header isSubpage />
      <main id="top">
        <section className="container download-hero">
          <div className="download">
            <div className="download__copy">
              <span className="pill">
                <Icon d={PATHS.download} size={16} stroke="currentColor" width={2} />
                Official download
              </span>
              <h1 className="hero__title download-hero__title">Download Hi-Rollin</h1>
              <p className="section__text">
                Get the app on Android or iOS, or launch straight in your browser with Play on Web.
              </p>

              <div className="download__actions">
                {hasAndroid ? (
                  <a className="btn btn--gold btn--lg" href={LINKS.android} target="_blank" rel="noopener noreferrer">
                    <Icon d={PATHS.download} size={20} width={2} />
                    Download for Android
                  </a>
                ) : (
                  <button type="button" className="btn btn--gold btn--lg" disabled>
                    Android: coming soon
                  </button>
                )}

                {hasIos ? (
                  <a className="btn btn--outline btn--lg" href={LINKS.ios} target="_blank" rel="noopener noreferrer">
                    <Icon d={PATHS.download} size={20} width={2} />
                    Download for iOS
                  </a>
                ) : (
                  <button type="button" className="btn btn--outline btn--lg" disabled>
                    iOS: coming soon
                  </button>
                )}

                {hasWeb && (
                  <a className="btn btn--outline btn--lg" href={LINKS.web} target="_blank" rel="noopener noreferrer">
                    Play on Web
                  </a>
                )}
              </div>

              <p className="download__note">Only download from this website.</p>
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

        <section className="container section" aria-labelledby="install-guides-title">
          <div className="section__head">
            <span className="eyebrow">Step-by-step</span>
            <h2 id="install-guides-title" className="section__title">How to install</h2>
            <p className="section__text">
              Follow the quick steps for your device, or jump straight in using Play on Web.
            </p>
          </div>

          <div className="guides">
            <article className="guide-card">
              <div className="guide-card__head">
                <span className="guide-card__badge">Android APK</span>
                <h3 className="card__title card__title--lg">Install on Android</h3>
              </div>
              <ol className="guide-card__list">
                <li>Tap <strong>Download for Android</strong> above to download the APK file.</li>
                <li>When your phone asks, allow installs from this source in your browser settings.</li>
                <li>Open the downloaded file, tap <strong>Install</strong>, and sign in to play.</li>
              </ol>
              {hasAndroid && (
                <a className="btn btn--gold btn--sm" href={LINKS.android} target="_blank" rel="noopener noreferrer">
                  <Icon d={PATHS.download} size={18} width={2} />
                  Download Android APK
                </a>
              )}
            </article>

            <article className="guide-card">
              <div className="guide-card__head">
                <span className="guide-card__badge">iOS</span>
                <h3 className="card__title card__title--lg">Install on iPhone &amp; iPad</h3>
              </div>
              <ol className="guide-card__list">
                <li>Tap <strong>Download for iOS</strong> above in Safari.</li>
                <li>Follow the on-screen prompts to complete installation on your device.</li>
                <li>Open Hi-Rollin and sign in, or use <strong>Play on Web</strong> anytime.</li>
              </ol>
              {hasIos ? (
                <a className="btn btn--outline btn--sm" href={LINKS.ios} target="_blank" rel="noopener noreferrer">
                  <Icon d={PATHS.download} size={18} width={2} />
                  Download for iOS
                </a>
              ) : (
                <button type="button" className="btn btn--outline btn--sm" disabled>
                  iOS: coming soon
                </button>
              )}
            </article>
          </div>
        </section>

        <section className="container section">
          <div className="final">
            <span className="eyebrow">24x7 Support</span>
            <h2 className="section__title">Need help installing?</h2>
            <p className="section__text">
              Reach out to our team on Telegram anytime and we&apos;ll help you get set up.
            </p>
            <div className="hero__cta">
              <a className="btn btn--gold btn--lg" href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
                <Icon d={PATHS.telegram} size={20} width={2} />
                Contact Telegram Support
              </a>
              <a className="btn btn--outline btn--lg" href="/">
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer isSubpage />
    </>
  )
}
