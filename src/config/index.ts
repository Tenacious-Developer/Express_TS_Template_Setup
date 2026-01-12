import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number;
};


function loadEnvFile() {
    dotenv.config();
}

loadEnvFile();  

export const serverConfig:ServerConfig = {
    PORT: Number(process.env.PORT || 3000)
};


