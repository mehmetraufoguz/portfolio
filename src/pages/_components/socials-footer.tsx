'use client'

import type { ComponentType } from 'react'
import { Fragment } from 'react'
import SimpleIconsGithub from '~icons/simple-icons/github'
import SimpleIconsTelegram from '~icons/simple-icons/telegram'
import { useConfig } from 'vocs'

const icons = {
  github: SimpleIconsGithub,
  telegram: SimpleIconsTelegram,
} satisfies Record<string, ComponentType<{ className?: string }>>

const labels = {
  github: 'GitHub',
  telegram: 'Telegram',
} satisfies Record<string, string>

export function SocialsFooter() {
  const { socials } = useConfig()

  if (!socials?.length) return null

  return (
    <div className="vocs:flex vocs:items-center vocs:justify-center vocs:gap-1 vocs:pt-8">
      {socials.map((social, index) => {
        const Icon = icons[social.icon as keyof typeof icons]
        const label = labels[social.icon as keyof typeof labels]

        if (!Icon || !label) return null

        return (
          <Fragment key={social.link}>
            {index !== 0 && <div className="vocs:w-px vocs:h-4 vocs:bg-primary vocs:mx-1" />}
            <a
              aria-label={label}
              className="vocs:flex vocs:items-center vocs:justify-center vocs:size-7 vocs:text-primary/60 vocs:hover:text-primary vocs:transition-colors vocs:duration-150"
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="vocs:size-[18px]" />
            </a>
          </Fragment>
        )
      })}
    </div>
  )
}
