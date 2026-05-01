"use client";

import { useEffect, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  pdf,
} from "@react-pdf/renderer";
import { Download, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { groups, Product } from "./Produtos";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpeg";

// Register fonts
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v53/TK3iWkUHHAIjg752Fj8Dde1cVw.ttf",
});

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.ttf" },
    {
      src: "https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.ttf",
      fontWeight: 700,
    },
  ],
});

const colors = {
  ember: "#E31E24", // New industrial red
  primary: "#1A202C",
  secondary: "#718096",
  background: "#F7FAFC",
  white: "#FFFFFF",
  border: "#E2E8F0",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.background,
    padding: 40,
    fontFamily: "Helvetica", // Fallback to standard font
  },
  header: {
    marginBottom: 40,
    borderBottomWidth: 2,
    borderBottomColor: colors.ember,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 5,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoText: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "bold",
  },
  logoAccent: {
    color: colors.ember,
  },
  logoSub: {
    fontSize: 8,
    color: colors.secondary,
    marginTop: 2,
  },
  contactInfo: {
    fontSize: 10,
    color: colors.secondary,
    textAlign: "right",
  },
  title: {
    fontSize: 28,
    color: colors.primary,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: colors.secondary,
    marginBottom: 30,
    lineHeight: 1.5,
  },
  groupTitle: {
    fontSize: 18,
    color: colors.primary,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  productCard: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  imageContainer: {
    width: "100%",
    height: 100,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F5F9",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  productTag: {
    fontSize: 7,
    color: colors.ember,
    fontWeight: "bold",
    marginBottom: 2,
  },
  productTitle: {
    fontSize: 12,
    color: colors.primary,
    marginBottom: 4,
    fontWeight: "bold",
  },
  productDesc: {
    fontSize: 8,
    color: colors.secondary,
    lineHeight: 1.3,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: colors.secondary,
  },
});

const MyDocument = ({ groups }: { groups: any[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image src={logo.src} style={styles.logo} />
          <View>
            <Text style={styles.logoText}>
              WM <Text style={styles.logoAccent}>Resistências</Text>
            </Text>
            <Text style={styles.logoSub}>ELÉTRICAS LTDA</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <Text>wa.me/5543996600605</Text>
          <Text>contato@wmresistencias.com.br</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Catálogo de Produtos</Text>
        <Text style={styles.subtitle}>
          Linha completa de resistências industriais de alta performance. Fabricamos sob medida
          conforme sua necessidade.
        </Text>
      </View>

      {groups.map((group, gIdx) => (
        <View key={gIdx} wrap={true}>
          <Text style={styles.groupTitle}>{group.name}</Text>
          <View style={styles.productGrid}>
            {group.items.map((product: Product, pIdx: number) => (
              <View key={pIdx} style={styles.productCard} wrap={false}>
                <View style={styles.imageContainer}>
                  <Image
                    src={typeof product.image === "string" ? product.image : (product.image as any)?.src}
                    style={styles.image}
                  />
                </View>
                <Text style={styles.productTag}>{product.tag}</Text>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productDesc}>{product.desc}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}

      <View style={styles.footer} fixed>
        <Text>WM Resistências Elétricas - Qualidade e Confiança</Text>
        <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
      </View>
    </Page>
  </Document>
);

export function CatalogDownload({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const blob = await pdf(<MyDocument groups={groups} />).toBlob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "catalogo-wm-resistencias.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup
      setTimeout(() => URL.revokeObjectURL(url), 100);

    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Houve um erro ao gerar o catálogo. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <Button
      variant="outline"
      className={cn(
        "bg-ember text-white cursor-pointer border-ember hover:bg-ember/90 hover:text-white shadow-ember shadow-ember/20 transition-all hover:scale-105 hover:shadow-ember/40 active:scale-95",
        className
      )}
      disabled={loading}
      onClick={handleDownload}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Gerando PDF...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Baixar Catálogo PDF
        </>
      )}
    </Button>
  );
}
