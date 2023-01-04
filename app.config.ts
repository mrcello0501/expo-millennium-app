import { ExpoConfig } from "expo/config";
import "dotenv/config";

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: "expo-millennium-app",
  slug: "expo-millennium-app",
  extra: {
    ...process.env,
  },
};

export default config;
