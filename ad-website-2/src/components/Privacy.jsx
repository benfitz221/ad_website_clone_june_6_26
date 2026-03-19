import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Copy ── */
const EYEBROW = 'Legal'
const HEADING = 'Privacy Policy'
const EFFECTIVE_DATE = 'Effective as of April 7, 2025.'
const INTRO =
  'This Privacy Policy describes how Agent Done ("Agent Done," "we," "us," or "our") handles information that we access, process, or collect through our consulting services, business communications, and other activities.'

const SECTIONS = [
  {
    title: 'Introduction',
    content: [
      'Agent Done is a brand of SIA Fitzgerald Change Consulting providing technology and process design services to multi-family property management businesses in the United States. We prioritize responsible data handling and this policy explains our approach to data privacy and security.',
    ],
  },
  {
    title: 'Information We Access and Collect',
    subsections: [
      {
        subtitle: 'Information we access through client systems',
        desc: 'We primarily interact with information through secure remote access to client systems, including:',
        items: [
          'Business operational data related to property management',
          'Process documentation and workflow information',
          'Technology systems infrastructure details',
          'Financial information related to property management operations',
          'Limited personal information about property tenants and employees necessary for our analysis',
        ],
      },
      {
        subtitle: 'Information clients provide to us',
        items: [
          'Contact data (names, professional titles, email addresses, phone numbers)',
          'Business information necessary for our consulting services',
          'Communications exchanged through email, messaging, or video conferencing',
          'Access credentials for client systems (stored securely)',
        ],
      },
      {
        subtitle: 'Website information',
        desc: 'From website visitors, we collect standard information (IP address, browser type, pages visited) solely to improve our website. We do not sell data to third parties.',
      },
    ],
  },
  {
    title: 'How We Use Information',
    subsections: [
      {
        subtitle: 'Service delivery and business operations',
        items: [
          'Analyze client business processes and technology systems',
          'Develop recommendations and implementation guidance',
          'Communicate with clients and respond to inquiries',
          'Manage client relationships and process payments',
          'Comply with legal obligations and protect our legal rights',
        ],
      },
      {
        subtitle: 'Analysis using LLM technology',
        desc: 'We use large language models with the following safeguards:',
        items: [
          'Analysis conducted on client-provided workstations whenever possible',
          'No storage of client information after sessions conclude',
          'Client data not used to train or improve the LLM',
          'Appropriate controls to prevent processing sensitive information',
        ],
      },
      {
        subtitle: 'Marketing',
        desc: 'We may use business contact information for occasional communications about our services. You may opt-out at any time.',
      },
    ],
  },
  {
    title: 'Data Security and Protection Measures',
    content: [
      'We implement security measures appropriate to our size and focus on controlled access rather than large-scale data storage.',
    ],
    subsections: [
      {
        subtitle: 'Remote access and data handling',
        items: [
          'Secure remote access using enterprise-grade tools with encrypted connections',
          'Client-controlled access permissions and session monitoring/logging',
          'Analysis conducted on client-provided workstations',
          'Storage of information on client systems whenever possible',
          'Limited temporary storage when necessary for service delivery',
          'Redaction of sensitive information and access to minimum necessary data',
          'Optional supervised sessions for highly sensitive information',
        ],
      },
      {
        subtitle: 'Technical safeguards',
        items: [
          'Encryption of data in transit',
          'Secure authentication methods including multi-factor where available',
          'Regular security assessments and prompt application of updates',
          'Limited, controlled access to client information',
        ],
      },
    ],
    footer:
      'No security measures are 100% effective. We focus on practical security measures with emphasis on controlled, secure access.',
  },
  {
    title: 'Information Sharing and Disclosure',
    content: ['We may share information with:'],
    subsections: [
      {
        subtitle: 'Contractors',
        desc: 'Third parties assisting in service delivery, subject to confidentiality requirements.',
      },
      {
        subtitle: 'Professional advisors',
        desc: 'Lawyers, auditors, accountants, and insurers, as necessary.',
      },
      {
        subtitle: 'Legal authorities',
        desc: 'When required by law or to protect rights and safety.',
      },
      {
        subtitle: 'Business transfers',
        desc: 'In connection with potential business transactions.',
      },
    ],
    footer:
      'We do not sell, rent, or share client information for marketing or advertising purposes. We operate with partners primarily in Europe, serving US clients. We comply with applicable laws for cross-border data access and implement appropriate safeguards where required.',
  },
  {
    title: 'Your Rights and Choices',
    subsections: [
      {
        subtitle: 'Access or correction',
        desc: 'Request access to or correction of your information by contacting support@agentdone.com.',
      },
      {
        subtitle: 'Marketing communications',
        desc: 'Opt-out via email instructions or direct contact.',
      },
      {
        subtitle: 'Data subject rights',
        desc: 'Individuals may have rights to access, correct, delete, or restrict processing of personal information, which we typically refer to our clients as data controllers.',
      },
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'We retain information for as long as necessary to provide services and fulfill the purposes outlined in this policy, unless longer retention is required by law. Retention periods depend on client requirements, legal obligations, and business necessity. We implement strict retention limits and secure deletion for any temporary copies.',
    ],
  },
  {
    title: 'Tools and Technology',
    content: [
      'Our services use various third-party tools including secure remote desktop services, AI-powered analytical tools, and standard business software. We select these based on security features and alignment with our privacy principles. Each third-party tool operates under its own privacy policy, which we evaluate before adoption.',
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      'Our services are not directed to children under 18, and we do not knowingly collect their personal information. If we learn we have collected such information, we will delete it.',
    ],
  },
  {
    title: 'Changes to this Privacy Policy',
    content: [
      'We may update this policy periodically. Material changes will be communicated via email or website notice prior to becoming effective.',
    ],
  },
  {
    title: 'Contact Information',
    content: ['Questions or concerns: support@agentdone.com.'],
  },
  {
    title: 'US Privacy Rights Notice',
    content: [
      'California and State Privacy Rights: Residents may have additional rights regarding personal information under state laws, including:',
    ],
    subsections: [
      {
        items: [
          'Rights to know, delete, and correct personal information',
          'Rights to limit use and disclosure of sensitive information',
          'Rights to opt-out of sales or sharing (we do not sell or share personal information)',
        ],
      },
    ],
    footer:
      'To exercise these rights, contact us at support@agentdone.com. The personal information we may access includes identifiers (names, emails), commercial information, professional information, and internet activity. In limited circumstances, we may access sensitive information like financial data, implementing additional safeguards including redaction. We disclose personal information only as described in the "Information Sharing and Disclosure" section.',
  },
]

/* ── Component ── */
export default function Privacy() {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    sectionsRef.current = []

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('.anim'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.2,
          ease: 'power3.out',
        })
      }

      sectionsRef.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-charcoal">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-charcoal overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-moss/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="anim flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-clay" />
            <span className="text-clay font-mono text-xs uppercase tracking-widest">
              {EYEBROW}
            </span>
          </div>

          <h1 className="anim font-sans font-bold text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {HEADING}
          </h1>

          <p className="anim text-cream/40 font-mono text-sm mb-6">
            {EFFECTIVE_DATE}
          </p>

          <p className="anim text-cream/60 text-base md:text-lg leading-relaxed">
            {INTRO}
          </p>
        </div>
      </section>

      {/* ── POLICY SECTIONS ── */}
      <section className="pb-24 md:pb-32 px-6 bg-charcoal">
        <div className="max-w-3xl mx-auto space-y-12">
          {SECTIONS.map((section, i) => (
            <div
              key={section.title}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="border-t border-cream/10 pt-8"
            >
              <h2 className="text-cream font-sans font-bold text-2xl md:text-3xl mb-4">
                {section.title}
              </h2>

              {section.content?.map((p, j) => (
                <p
                  key={j}
                  className="text-cream/60 text-sm leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}

              {section.subsections?.map((sub, k) => (
                <div key={k} className="mb-6 last:mb-0">
                  {sub.subtitle && (
                    <h3 className="text-cream/80 font-sans font-bold text-base mb-2">
                      {sub.subtitle}
                    </h3>
                  )}
                  {sub.desc && (
                    <p className="text-cream/60 text-sm leading-relaxed mb-3">
                      {sub.desc}
                    </p>
                  )}
                  {sub.items && (
                    <ul className="space-y-2 ml-4">
                      {sub.items.map((item, m) => (
                        <li key={m} className="flex items-start gap-3">
                          <div className="w-1 h-1 rounded-full bg-clay mt-2 shrink-0" />
                          <span className="text-cream/50 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {section.footer && (
                <p className="text-cream/50 text-sm leading-relaxed mt-4 italic">
                  {section.footer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── BACK NAV ── */}
      <section className="py-16 px-6 bg-moss">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-cream/50 text-sm mb-6">
            Questions about this policy? Reach out at{' '}
            <a
              href="mailto:support@agentdone.com"
              className="text-clay hover:text-clay/80 transition-colors"
            >
              support@agentdone.com
            </a>
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/40 hover:text-cream text-sm font-mono transition-colors"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
