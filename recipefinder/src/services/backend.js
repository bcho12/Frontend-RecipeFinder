const LOCALAPI = "http://localhost:3000"

export const getAuthToken = (loginInfo) => {
	console.log(loginInfo)
    return fetch(`${LOCALAPI}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo)
    }).then(res => res.json())
}

export const addNewUser = (name, password) => {
    return fetch(`${LOCALAPI}/users`, {
        method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: name,
                password: password
            })
        }).then(res => res.json())
    }

    export const getUserInfo = (id) => {
        return fetch(`${LOCALAPI}/users/${id}`).then(res => res.json())
    }


export const fetchTitle = (title, pageNumber=1) => {
	console.log(pageNumber)
	return fetch("http://localhost:3000/fetch", {
		method: "GET",
		headers: new Headers({
			'title': title,
			'pageNumber': pageNumber
		})
	}).then(res => res.json())
}

export const postFavorite = (recipeItem, userId) => {
	return fetch(`http://localhost:3000/recipes`, {
		method: "POST",
		headers: {
			 "Content-Type": "application/json",
			 "Authorization": localStorage.getItem('token')
		},
		body: JSON.stringify({
			 title: recipeItem.title,
			 thumbnail: recipeItem.thumbnail,
			 user_id: userId
		})
 }).then(res => res.json())
}

export const getFavorites = (user_id) => {
   return fetch(`http://localhost:3000/users/${user_id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         "Authorization": localStorage.getItem('token')
      }
   }).then(res => res.json())
}

export const deleteFavorite = (user_id, recipe_id) => {
   return fetch(`http://localhost:3000/removeFavorites`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({
         user_id: user_id,
         recipe_id: recipe_id
      })
   })
	 console.log("inside deleteFavorite")
}

// export const fetchTitle = (title) => {
// 	return fetch("http://localhost:3000/fetch", {
// 		method: "GET",
// 		headers: new Headers({
// 			'title': title
// 		})
// 	}).then(res => res.json())
// }
