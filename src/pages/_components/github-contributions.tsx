'use client'

import type { ComponentType } from 'react'
import GitHubCalendarImport from 'react-github-calendar'

const GitHubCalendar = (
  'default' in GitHubCalendarImport
    ? (GitHubCalendarImport as { default: ComponentType<Record<string, unknown>> }).default
    : GitHubCalendarImport
) as ComponentType<{
  showWeekdayLabels?: boolean
  username: string
}>

export function GitHubContributions() {
  return (
    <GitHubCalendar showWeekdayLabels username="mehmetraufoguz" />
  )
}
