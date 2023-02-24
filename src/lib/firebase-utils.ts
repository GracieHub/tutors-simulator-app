/* eslint-disable @typescript-eslint/no-explicit-any */
import { getApp, initializeApp } from "firebase/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";

export function sanatisePath(url: string, path: string) {
	let node = path.replace(url, "");
	node = node.substr(node.indexOf("//") + 2, node.length);
	// eslint-disable-next-line no-useless-escape
	node = node.replace(/[`#$.\[\]]/gi, "*");
	return node;
}

export function getNode(lotype: string, url: string, path: string): string {
	let node = "";
	if (lotype !== "course") {
		node = sanatisePath(url, path);
	}
	return node;
}

export async function readValue(key: string): Promise<string> {
	const dbRef = ref(getDatabase());
	const snapShot = await get(child(dbRef, key));
	return snapShot.val();
}

export async function readObj(key: string): Promise<any> {
	const dbRef = ref(getDatabase());
	const snapShot = await get(child(dbRef, key));
	return snapShot.val();
}

export function writeObj(key: string, obj: any) {
	try {
		const db = getDatabase();
		const dbRef = ref(db, key);
		void set(dbRef, obj);
	} catch (error: any) {
		console.log(`TutorStore Error: ${error.message}`);
	}
}

export async function deleteObj(root: string, url: string) {
	const db = getDatabase();
	let key = "";
	if (root) {
		key = `${root}/${url}`;
	} else {
		key = url;
	}
	const obj = ref(db, key);
	await remove(obj);
}

export async function initFirebase(keys: any) {
	if (keys.apiKey !== "XXX") {
		try {
			return getApp();
		} catch {
			initializeApp(keys);
		}
	}
}


