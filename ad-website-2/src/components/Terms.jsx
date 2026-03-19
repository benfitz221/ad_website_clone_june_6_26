import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Copy ── */
const EYEBROW = 'Legal'
const HEADING = 'Terms of Service'
const LAST_UPDATED = 'Last updated: April 7, 2025.'
const INTRO =
  'Please read these terms and conditions carefully before using Our Service.'

const DEFINITIONS = [
  { term: 'Company', def: 'refers to Agent Done, a brand of SIA Fitzgerald Change Consulting.' },
  { term: 'Client', def: 'refers to the businesses and/or individuals engaging our Consulting Services.' },
  { term: 'Client Data', def: 'refers to any information, documents, or data provided by the Client for the purpose of performing Consulting Services.' },
  { term: 'Consulting Services', def: 'refers to technology and process design services provided to businesses and/or individuals.' },
  { term: 'Deliverables', def: 'refers to the reports, analyses, recommendations, or other outputs produced as part of the Consulting Services.' },
  { term: 'Service', def: 'refers to the Website and the Consulting Services provided by the Company.' },
  { term: 'Terms', def: 'mean these Terms and Conditions that form the entire agreement between You and the Company.' },
  { term: 'Third-party Service', def: 'means any services or content provided by a third-party that may be used in connection with the Service.' },
  { term: 'Website', def: 'refers to Agentdone.com, accessible from https://www.agentdone.com.' },
  { term: 'You', def: 'means the individual or entity accessing or using the Service.' },
]

const SECTIONS = [
  {
    title: 'Acknowledgment',
    content: [
      'By accessing or using the Service, You agree to be bound by these Terms. If You disagree with any part of these Terms, You may not access the Service. You represent that you are over the age of 18. Your use of the Service is also conditioned on Your acceptance of our Privacy Policy.',
    ],
  },
  {
    title: 'Consulting Services',
    content: [
      'The Company provides technology and process design consulting services to multi-family property management businesses. Our services include business process optimization, IT change management, technology implementation guidance, and data analysis. The Company\u2019s ability to provide these services depends on the Client providing accurate and timely information.',
      'The Client acknowledges that the Company\u2019s founders and contractors may deliver services remotely, including from locations outside the United States. All Consulting Services will be performed in accordance with industry standards and practices.',
    ],
  },
  {
    title: 'Technology Use and AI Implementation',
    subsections: [
      {
        subtitle: 'Technology Implementation',
        desc: 'The Company utilizes various technological tools, including large language models and other artificial intelligence systems, to analyze Client Data and provide Consulting Services. These tools help us deliver insights, recommendations, and solutions tailored to the Client\u2019s specific needs. The Client acknowledges and consents to the Company\u2019s use of these technologies in providing the Consulting Services, subject to the confidentiality and data protection provisions outlined in these Terms.',
      },
      {
        subtitle: 'Limitations and Safeguards',
        desc: 'The Company will:',
        items: [
          'Ensure all AI and technology usage complies with applicable licenses and terms of service',
          'Appropriately anonymize or de-identify Client Data when possible',
          'Not use Client Data to train or improve underlying AI models',
          'Obtain Client approval before using specific AI tools to process Client Data',
          'Not rely solely on AI-generated outputs without human review and verification',
          'Maintain oversight of all AI-generated content and verify outputs incorporated into Deliverables',
        ],
      },
      {
        subtitle: 'AI-Generated Content',
        desc: 'The Company does not guarantee that AI-generated content will be free from errors, biases, or inaccuracies. Ownership of AI-generated outputs created specifically for You as part of the Deliverables shall be governed by the Intellectual Property section. The Company retains the right to use anonymized patterns, techniques, and learnings from the AI processes (but not Your specific content or data) to improve its Services.',
      },
    ],
  },
  {
    title: 'Data Protection and Confidentiality',
    subsections: [
      {
        subtitle: 'Confidentiality Obligations',
        desc: 'Both parties acknowledge that they may be exposed to confidential information during the Consulting Services. Each party agrees to maintain the confidentiality of the other party\u2019s confidential information and take reasonable measures to prevent unauthorized disclosure. Confidentiality obligations shall survive the termination of the Consulting Services for three (3) years.',
      },
      {
        subtitle: 'Client Data Protection',
        desc: 'The Company will:',
        items: [
          'Use Client Data solely for providing the Consulting Services',
          'Access Client Data only through secure, Client-approved methods',
          'Not disclose Client Data to third parties without prior written consent',
          'Return or securely destroy Client Data upon request or termination',
          'Access Client systems only through secure, Client-approved platforms',
          'Store Client Data and analysis results on Client\u2019s systems whenever possible',
        ],
      },
      {
        subtitle: 'Exceptions to Confidentiality',
        desc: 'Confidentiality obligations do not apply to information that:',
        items: [
          'Is or becomes publicly available through no fault of the receiving party',
          'Is independently developed without use of confidential information',
          'Is rightfully obtained from a third party without a duty of confidentiality',
          'Is required to be disclosed by law or court order, with reasonable notice to the other party',
        ],
      },
      {
        subtitle: 'Compliance with Laws',
        desc: 'The Company will comply with applicable data protection laws, including relevant U.S. state laws and, where applicable, the EU General Data Protection Regulation.',
      },
    ],
  },
  {
    title: 'Security Framework',
    subsections: [
      {
        subtitle: 'Data Security Measures',
        desc: 'The Company implements reasonable technical, organizational, and physical safeguards to protect Client Data from unauthorized access, use, or disclosure. We follow data minimization principles and collect only the data necessary for service delivery. Client Data will only be accessible to authorized Company personnel with a legitimate need for such access to provide the Consulting Services.',
      },
      {
        subtitle: 'Remote Access Protocols',
        desc: 'When accessing Client systems remotely, the Company will:',
        items: [
          'Use only Client-approved remote access solutions',
          'Maintain detailed logs of remote access sessions',
          'Access Client systems only for providing the Consulting Services',
          'Limit screen sharing or remote control to authorized personnel',
          'Implement secure, encrypted connections for all sessions',
        ],
      },
      {
        subtitle: 'International Data Considerations',
        desc: 'Given the Company\u2019s international operations, You consent to the transfer and processing of Client Data across borders. The Company will:',
        items: [
          'Implement appropriate safeguards for international transfers',
          'Ensure data recipients are bound by confidentiality obligations',
          'Process data only for the purposes outlined in these Terms',
          'Take additional measures for data subject to GDPR or similar comprehensive privacy laws',
        ],
        footer: 'You acknowledge that You are responsible for obtaining any necessary consents from data subjects whose personal data may be included in the Client Data provided to the Company.',
      },
      {
        subtitle: 'Data Breach Response',
        desc: 'In the event of any actual or suspected unauthorized access to Client Data, the Company will promptly notify the Client and cooperate with the Client\u2019s investigation of the incident.',
      },
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'The Company follows data minimization principles and will only collect and retain Client Data necessary for providing the Consulting Services. The Company will:',
    ],
    subsections: [
      {
        items: [
          'Maintain Client Data necessary for active project delivery during service provision',
          'Return or securely destroy Client Data as instructed within 30 days of project completion',
          'In absence of instructions, retain minimal Client Data for up to one year for legitimate business purposes such as responding to potential disputes or inquiries about completed Services',
          'Retain anonymized, aggregated data that cannot be linked to You or any individual for service improvement purposes',
          'Delete specific Client Data upon written request, except where retention is required by applicable law, necessary for the establishment, exercise, or defense of legal claims, or required to complete any outstanding Consulting Services',
          'Provide written certification of data deletion upon request',
        ],
      },
    ],
  },
  {
    title: 'Intellectual Property',
    subsections: [
      {
        subtitle: 'Ownership of Deliverables',
        desc: 'Unless otherwise agreed in writing, the Client shall own all right, title, and interest in the Deliverables provided by the Company, upon full payment for such services.',
      },
      {
        subtitle: 'Company\u2019s Pre-existing IP',
        desc: 'The Company retains ownership of all intellectual property rights in its pre-existing methodologies, processes, technologies, and know-how. The Client is granted a non-exclusive, non-transferable license to use such pre-existing intellectual property solely in connection with the Deliverables.',
      },
      {
        subtitle: 'Tools and Methods',
        desc: 'The Company\u2019s generalized knowledge, experience, and know-how may be used in the course of its business, provided that such use does not involve disclosure of the Client\u2019s confidential information.',
      },
    ],
  },
  {
    title: 'Business Relationship Terms',
    subsections: [
      {
        subtitle: 'Non-Solicitation',
        desc: 'During the term of services and for one year following, You agree not to directly or indirectly solicit or hire any founder, partner, employee, or contractor of the Company who provided Services to You, without prior written consent. If breached, You shall pay 50% of the annual compensation offered to the solicited individual as liquidated damages.',
      },
      {
        subtitle: 'Non-Disparagement',
        desc: 'Each party agrees not to disparage or defame the other party. This does not prohibit providing truthful information in response to legal process, filing complaints with government agencies, making truthful statements in formal dispute resolution, or making factual statements about the Services that are not intended to harm reputation.',
      },
      {
        subtitle: 'Feedback and Marketing',
        desc: 'You agree that the Company may use any feedback, suggestions, or ideas You provide about the Services in any way, including in future modifications of the Services, marketing materials, or testimonials. You grant the Company a perpetual, worldwide, fully transferable, sublicensable, irrevocable, fully paid-up, royalty-free license to use, reproduce, modify, create derivative works from, distribute, and display the feedback in any manner and for any purpose, without any restriction or compensation to You.',
        footer: 'The Company may use Your company name and logo to identify You as a client in marketing materials, website, and presentations, unless You expressly notify the Company in writing that such use is not permitted. Upon Your written consent, the Company may develop case studies based on the Services provided to You, removing all confidential or identifying information.',
      },
      {
        subtitle: 'Online Content and Brand Protection',
        desc: 'You recognize that the Company has a legitimate interest in maintaining its online reputation and brand integrity. You agree that You will not:',
        items: [
          'Register or use domain names, social media accounts, email addresses, or other online identifiers that incorporate the Company\u2019s name, trademarks, or confusingly similar variations',
          'Create or maintain websites, social media pages, or other online content purporting to represent or be affiliated with the Company',
          'Use the Company\u2019s name, logo, or trademarks in any manner that might cause confusion about Your relationship with the Company',
        ],
        footer: 'The Company reserves the right to monitor public statements about its business and may request the removal of unauthorized or infringing content. You agree to promptly comply with any such reasonable requests.',
      },
    ],
  },
  {
    title: 'Website Terms',
    subsections: [
      {
        subtitle: 'Links to Other Websites',
        desc: 'Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party websites You visit.',
      },
      {
        subtitle: 'Structured Data and Search Engines',
        desc: 'You acknowledge that the Company may implement structured data markup and other search engine optimization techniques on its Website to improve visibility and accurately represent its Services. This may include schema.org markup, JSON-LD data, and other metadata that describes the Company\u2019s business type, services, locations, and other relevant business information.',
        footer: 'By using the Website, You consent to search engines indexing and caching publicly available content from the Website, including any public information related to the business relationship between You and the Company that may be displayed with Your prior consent.',
      },
      {
        subtitle: 'Accessibility Commitment',
        desc: 'The Company is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards, striving to conform to level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1. If You encounter accessibility barriers on our Website, please contact us at support@agentdone.com.',
      },
    ],
  },
  {
    title: 'Legal Terms',
    subsections: [
      {
        subtitle: 'Limitation of Liability',
        desc: 'To the maximum extent permitted by law, the Company shall not be liable for indirect, incidental, special, exemplary, or consequential damages arising from the Consulting Services. Total liability shall not exceed the amount paid by the Client for the specific Services giving rise to the claim within the six months preceding the event.',
        footer: 'Nothing excludes liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability that cannot be excluded under applicable law.',
      },
      {
        subtitle: 'Separation of Entity',
        desc: 'The Company is organized as a Limited Liability Partnership. All Services are provided by the Company as an entity, not by any individual. Claims arising from these Terms shall be directed solely against the Company, not against any individual founder, partner, employee, or contractor.',
      },
      {
        subtitle: 'Indemnification',
        desc: 'The Client shall indemnify the Company from claims arising from breach of these Terms, inaccurate information, use of Deliverables, or Client Data provided. The Company shall indemnify the Client from third-party claims arising directly from material breach of confidentiality obligations or claims that the Company\u2019s pre-existing IP infringes third-party rights.',
        footer: 'Each party shall: promptly notify the other of claims, give the indemnifying party control over defense and settlement, and provide reasonable cooperation. Total liability under this indemnification is limited to fees paid during the twelve months preceding the claim.',
      },
      {
        subtitle: '\u201CAS IS\u201D Disclaimer',
        desc: 'The Service is provided \u201CAS IS\u201D and \u201CAS AVAILABLE\u201D without warranty of any kind. The Company disclaims all warranties, express, implied, statutory or otherwise, including merchantability, fitness for purpose, and non-infringement. No representation is made regarding accuracy, reliability, or error-free operation of the Service.',
      },
    ],
  },
  {
    title: 'Dispute Resolution',
    subsections: [
      {
        subtitle: 'Arbitration Agreement',
        desc: 'Any dispute arising from these Terms shall be resolved by binding arbitration in accordance with the Rules of the American Arbitration Association, taking place in Delaware, United States.',
      },
      {
        subtitle: 'Class Action Waiver',
        desc: 'You and the Company agree to resolve disputes solely on an individual basis, not as a class action, collective action, or representative proceeding.',
      },
      {
        subtitle: 'Expedited Resolution',
        desc: 'Before posting any negative review or complaint publicly, You agree to first attempt to resolve any dispute directly with the Company by contacting support@agentdone.com and allowing thirty days for resolution.',
      },
    ],
  },
  {
    title: 'Additional Terms',
    subsections: [
      {
        subtitle: 'Force Majeure',
        desc: 'Neither party shall be liable for any failure or delay in performing its obligations under these Terms to the extent caused by circumstances beyond its reasonable control, including but not limited to: acts of God; natural disasters; epidemic or pandemic; terrorist attacks; war or armed conflict; nuclear, chemical or biological contamination; collapse of buildings; fire, explosion or accident; strikes, labor disputes or other industrial action; interruption or failure of utility service; actions or restrictions imposed by governments or public authorities; or any other event beyond the reasonable control of the affected party.',
        footer: 'A party affected by a Force Majeure Event shall promptly notify the other party in writing of the nature and extent of the event, and shall use all reasonable endeavors to mitigate its effects, perform the affected obligations as soon as reasonably possible, and resume full performance. During a Force Majeure Event, the parties shall work cooperatively to identify alternative methods of performance, which may include remote service delivery, modified scope of work, or other reasonable accommodations. If an event persists for ninety consecutive days, either party may terminate the affected Services without liability.',
      },
      {
        subtitle: 'Legal Compliance',
        desc: 'You represent that You are not located in a country subject to U.S. government embargo or designated as \u201Cterrorist supporting,\u201D and are not on any U.S. government restricted parties list.',
      },
      {
        subtitle: 'Severability and Modifications',
        desc: 'If any provision of these Terms is unenforceable, it will be modified to accomplish its objectives to the extent possible, while remaining provisions continue in effect. We reserve the right to modify these Terms with 30 days\u2019 notice for material changes.',
      },
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have questions about these Terms, contact us at: support@agentdone.com.',
    ],
  },
]

/* ── Component ── */
export default function Terms() {
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
            {LAST_UPDATED}
          </p>

          <p className="anim text-cream/60 text-base md:text-lg leading-relaxed">
            {INTRO}
          </p>
        </div>
      </section>

      {/* ── DEFINITIONS ── */}
      <section className="pb-12 px-6 bg-charcoal">
        <div className="max-w-3xl mx-auto border-t border-cream/10 pt-8">
          <h2 className="text-cream font-sans font-bold text-2xl md:text-3xl mb-6">
            Definitions
          </h2>
          <p className="text-cream/60 text-sm leading-relaxed mb-6">
            For the purposes of these Terms and Conditions:
          </p>
          <dl className="space-y-4">
            {DEFINITIONS.map((d) => (
              <div key={d.term} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-clay mt-2 shrink-0" />
                <p className="text-cream/50 text-sm leading-relaxed">
                  <span className="text-cream/80 font-semibold">
                    &lsquo;{d.term}&rsquo;
                  </span>{' '}
                  {d.def}
                </p>
              </div>
            ))}
          </dl>
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
                  {sub.footer && (
                    <p className="text-cream/50 text-sm leading-relaxed mt-3 italic">
                      {sub.footer}
                    </p>
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
            Questions about these terms? Reach out at{' '}
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
