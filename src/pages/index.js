import Head from "next/head";
import estilos from "@/styles/Home.module.css";
import Topo from "../components/Topo";
import SecaoCapa from "@/components/SecaoCapa";
import SecaoProdutos from "@/components/SecaoProdutos";
import SecaoSobre from "@/components/SecaoSobre";
import SecaoContato from "@/components/SecaoContato";
import Rodape from "@/components/Rodape";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Topo />
            <SecaoCapa />
            <SecaoProdutos />
            <SecaoSobre />
            <SecaoContato />
            <Rodape />
        </>
    );
}
