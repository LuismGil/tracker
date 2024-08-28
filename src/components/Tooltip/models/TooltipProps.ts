export default interface TooltipProps {
  showing?: boolean
  content: string
  anchor?: 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' |
  'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
  self?: 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' |
  'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
  offset?: Array<number>
  maxHeight?: string | null
  maxWidth?: string | null
  delay?: number
  persistent?: boolean
  qClass?: string
}
