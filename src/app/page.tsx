import { useNavigateTo } from '@/hooks/use-navigateTo'
import { permanentRedirect } from 'next/navigation'

export default async function Redirect() {
	permanentRedirect(useNavigateTo())
}
