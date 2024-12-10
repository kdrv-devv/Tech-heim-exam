import React, { useState } from "react";
import "./admin.scss";
import { Header } from "../../components";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CircularProgress from "@mui/material/CircularProgress";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export default function Admin() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    modelName: "",
    screenSize: "",
    ram: "",
    display: "",
    processor: "",
    graphics: "",
    height: "",
    category: "",
  });

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    let imageURL = "";

    if (files.length > 0 && validTypes.includes(files[0].type)) {
      const base64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
      imageURL = base64;
    }

    const payload = {
      id: Date.now().toString(),
      title: formData.productName,
      newPrice: 1399,
      brand: formData.brand,
      model: formData.modelName,
      size: formData.screenSize,
      ram: formData.ram || "8 GB",
      display: formData.display,
      processor: formData.processor,
      graphics: formData.graphics,
      height: formData.height || "0.61 inch (1.56 cm)",
      dollar: "$",
      catagory: formData.category,
      rate: 3.9,
      image: imageURL || "DefaultImageURL",
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Ma'lumotlar muvaffaqiyatli yuklandi!");
        } else {
          console.error("Yuklashda xatolik yuz berdi");
        }
      })
      .catch((err) => console.error("Fetch xatosi:", err))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />
      <section className="admin">
        <form className="container" onSubmit={handleSubmit}>
          <div className="admin-left">
            <div className="name">
              <label htmlFor="productName">Mahsulot nomi</label>
              <input
                id="productName"
                type="text"
                placeholder="Mahsulot nomi"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="brand">Brend</label>
              <input
                id="brand"
                type="text"
                placeholder="Brend"
                value={formData.brand}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="modelName">Model</label>
              <input
                id="modelName"
                type="text"
                placeholder="Model"
                value={formData.modelName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="screenSize">Ekran o‘lchami</label>
              <input
                id="screenSize"
                type="text"
                placeholder="Ekran o‘lchami"
                value={formData.screenSize}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="ram">RAM</label>
              <input
                id="ram"
                type="text"
                placeholder="RAM"
                value={formData.ram}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="admin-right">
            <div className="name">
              <label htmlFor="display">Displey</label>
              <input
                id="display"
                type="text"
                placeholder="Displey"
                value={formData.display}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="graphics">Grafika</label>
              <input
                id="graphics"
                type="text"
                placeholder="Grafika"
                value={formData.graphics}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="processor">Protsessor</label>
              <input
                id="processor"
                type="text"
                placeholder="Protsessor"
                value={formData.processor}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button
              component="label"
              variant="contained"
              startIcon={
                loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <CloudUploadIcon />
                )
              }
            >
              Fayllarni yuklash
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                accept="image/png, image/jpeg"
              />
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Yuklanmoqda..." : "Yuborish"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
