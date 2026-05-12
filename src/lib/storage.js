const KEY ="destinasi"

export const getDestinasi = ()=> {
   return JSON.parse(localStorage.getItem(KEY) || "[]") 
}

export const  saveDestinasi = (destinasi) => {
    localStorage.setItem(KEY, JSON.stringify(destinasi))
};