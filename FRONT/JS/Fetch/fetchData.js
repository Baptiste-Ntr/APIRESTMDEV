export const fetchData = async (url, requestMethod) => {
    try {
    const response = await fetch(url, {
        method: requestMethod,
        headers: {
            'Content-Type': 'application/json', // Si nécessaire, ajustez les en-têtes en fonction de vos besoins
      },
    }); // Effectue la requête GET
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json(); // Renvoie les données récupérées
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error.message}`);
    throw error;
  }
}