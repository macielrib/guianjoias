"use client"

import { useState } from "react";
import ProductsAndCategories from "./produtos_categorias/page";
import CategoriesWithoutProducts from "./com_categoria_sem_produto/page";
import SemProdutos from "./sem_produto_categoria/page";


interface Product {
  name: string;
  status: string;
  purchaseDate: string;
  id: string;
  imageUrl: string;
  createdAt: string; 
}

interface Category {
  name: string;
}

const AdminPage = () => {
  const [categories] = useState<Category[]>([
    {
      name: "Categoria 1",
    },
    {
      name: "Categoria 2",
    },
    {
      name: "Categoria 3",
    },
  ]);
  // Arrays simulados de produtos e categorias
  const [products] = useState<Product[]>([
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
      imageUrl: "/assets/joias/pulseiraouro.png",
      createdAt: "05/11/2014", // Data de criação
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
      imageUrl: "/assets/joias/pulseiraouro.png",
      createdAt: "05/11/2014", // Data de criação
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
      imageUrl: "/assets/joias/pulseiraouro.png",
      createdAt: "05/11/2014", // Data de criação
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
      imageUrl: "/assets/joias/pulseiraouro.png",
      createdAt: "05/11/2014", // Data de criação
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
      imageUrl: "/assets/joias/pulseiraouro.png",
      createdAt: "05/11/2014", // Data de criação
    },
    {
      name: "Excepteur sint occaecat cupidatat non proident",
      status: "Aguardando envio",
      purchaseDate: "06/11/2014 - 16:11",
      id: "#435931",
      imageUrl: "/assets/joias/pulseiraouro.png",
      createdAt: "05/11/2014", // Data de criação
    },
    
    // Adicione mais produtos se necessário
  ]);



  // Checa se existem produtos e categorias
  if (products.length === 0 && categories.length === 0) {
    return <SemProdutos />;
  }

  if (categories.length > 0 && products.length === 0) {
    return <CategoriesWithoutProducts categories={categories} />;
  }

  if (products.length > 0 && categories.length > 0) {
    return <ProductsAndCategories products={products} categories={categories} />;
  }

  return null;
};

export default AdminPage;
