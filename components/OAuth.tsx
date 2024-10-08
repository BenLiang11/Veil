import { Text, View } from 'react-native';

import CustomButton from '@/components/CustomButton';

const OAuth = () => {
  const handleGoogleSignIn = async () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-gray-200" />
        <Text className="text-lg font-crimson">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-200" />
      </View>

      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
