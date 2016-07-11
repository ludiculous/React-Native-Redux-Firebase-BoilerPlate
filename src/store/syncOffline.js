import offline from 'react-native-simple-store'

export default function(store){
	let currentItems

	store.subscribe(() => {
		const { offlineLoaded, offlineList} = store.getState().currentItems

		if(offlineLoaded && currentItems != offlineList) {
			offline.save('items', offlineList)
			currentItems = offlineList
		}
	})
}