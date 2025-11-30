// const BASE_URL = "https://6924cbed82b59600d7216121.mockapi.io/products";
const BASE_URL = "https://692ba2e2c829d464006d4d6b.mockapi.io/products";

export const createProduct = async(product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        throw new Error("No se pudo crear el producto");
    }

    const result = await res.json();
    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        url = `${BASE_URL}?category=${category}`
    }

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Error al listar productos");
    }

    const results = await res.json();
    return results;
}

export const getProductById = async (id) => {
    const safeId = encodeURIComponent(String(id).trim());
    const res = await fetch(`${BASE_URL}/${safeId}`);
    if (!res.ok) {
        throw new Error(`Error al obtener el producto (status ${res.status})`);
    }
    return await res.json()
}
