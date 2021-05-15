export let restaurants = [
    {
        id: "2973b1b4-72e5-457c-a8f9-010f25d6c27c",
        name: "McDonalds",
        rating: 3.9
    },
    {
        id: "067a906c-7949-4e3d-912f-e64528f01131",
        name: "Burger King",
        rating: 2.6
    },
    {
        id: "c74924e8-ef42-4826-b29b-7d454fd38bb8",
        name: "Popeyes",
        rating: 4.8
    },
    {
        id: "e0dc53e1-2417-454b-add4-7a09ed68f3e3",
        name: "Taco Bell",
        rating: 3.4
    }
]

export const updateRestaurantsList = (updatedRestaurantsList) => {
    restaurants = updatedRestaurantsList
}