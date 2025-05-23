import { headers } from "next/headers";

export const getSubDomainServerSide = async () => {
	let subdomain = ''
	const headersList = headers()
	const domain = (await headersList).get('host')

	if (domain) {
		const urlPaths = domain.split(".");
		if (urlPaths.length > 2) {
			subdomain = urlPaths[0].split('-').pop() || urlPaths[0]
			return subdomain
		}
	}

    return 'th'
}