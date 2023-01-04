import Constants from "expo-constants";

interface IEnv {
  test: string;
}

const env: IEnv = {
  test: Constants?.manifest?.extra?.ENV_TEST ?? "",
};

export default env;
