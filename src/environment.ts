
const apiKey = import.meta.env.VITE_firebase_apiKey;
const databaseUrl = import.meta.env.VITE_firebase_databaseUrl;
const projectId = import.meta.env.VITE_firebase_projectId;


const keys = {
	firebase: {
		apiKey: apiKey,
		databaseURL: databaseUrl,
		projectId: projectId
	}
};

export function getKeys() {
	return keys;
}


