import { headers } from "next/headers";

export const getSubDomainServerSide = () => {
	let subdomain = ''
	const headersList = headers()
	const domain = headersList.get('host')
    console.log('getSubDomainServerSide: ', domain)
	if (domain) {
		const urlPaths = domain.split(".");
		if (urlPaths.length > 2) {
			subdomain = urlPaths[0].split('-').pop() || urlPaths[0]
            console.log('subdomain: ', subdomain)
			return subdomain
		}
	}

    return 'th'
}