export const ProductFormUI = ({ product, errors, loading, onChange, onFileChange, onSubmit }) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Agregar Producto</h2>

                <div className="form-field">
                    <label>Nombre:</label>
                    <input type="text" name="name" value={product.name} onChange={onChange} required />
                    { errors.name && <p className="error"> { errors.name } </p> } 
                </div>

                <div className="form-field">
                    <label>Precio:</label>
                    <input type="number" name="price" value={product.price} onChange={onChange} min="1" required />
                    { errors.price && <p className="error"> { errors.price } </p> }
                </div>

                <div className="form-field">
                    <label>Categoría:</label>
                    <input type="text" name="category" value={product.category} onChange={onChange} required />
                    { errors.category && <p className="error"> { errors.category } </p> }
                </div>

                <div className="form-field">
                    <label>Descripción:</label>
                    <textarea name="description" value={product.description} onChange={onChange} required />
                    { errors.description && <p className="error"> { errors.description } </p> }
                </div>

                <div className="form-field">
                    <label>Imagen:</label>
                    <input type="file" accept="jpeg" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} />
                    { errors.file && <p className="error"> { errors.file } </p> }
                </div>

                <button className="btn" type="submit" disabled={loading}>
                    { loading ? "Guardando..." : "Guardar" }
                </button>
            </form>
        </section>
    );
};
