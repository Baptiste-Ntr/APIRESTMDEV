export const fetchData = async (url) => {
    try {
    const response = await fetch(url); // Effectue la requête GET
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json(); // Renvoie les données récupérées
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error.message}`);
    throw error;
  }
}