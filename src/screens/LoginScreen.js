import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import LogixLogo from "../assets/img/logix-logo.png";
import CustomHeader from "../components/CustomHeader";
import GoogleIcon from "../components/svgs/GoogleIcon";
import FacebookIcon from "../components/svgs/FacebookIcon";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoginApi } from "../services/Auth";
import { validateEmail, validateEmailOrUsername } from "../helpers/boolean";
import { storeData } from "../helpers/AsyncStorage";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../store/authReducer";

const LoginScreen = ({ navigation }) => {
  const [isPasswordShowing, setIsPasswordShowing] = useState(false);
  const dispatch = useDispatch();

  const SigninSchema = Yup.object().shape({
    emailOrUsername: Yup.string()
      .test(
        "emailOrUsername",
        "Email or username is not valid",
        validateEmailOrUsername
      )
      .required("Email or username can not be empty"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Password can not be empty"),
  });
  const handleSubmit = async (values, actions) => {
    const { setSubmitting } = actions;
    try {
      const isEmail = validateEmail(values.emailOrUsername);
      const payload = {
        email: isEmail && values.emailOrUsername,
        username: !isEmail && values.emailOrUsername,
        password: values.password,
      };

      const { response, error } = await LoginApi(payload);
      if (response) {
        await storeData("token", response.accessToken);
        dispatch(setAuthenticated(true));
        setTimeout(() => {
          setSubmitting(false);
          // navigation.goBack();
          navigation.navigate("Movies");
        }, 400);
      } else if (error) {
        Alert.alert(JSON.stringify(error));
        setSubmitting(false);
      }
    } catch (err) {
      Alert.alert(JSON.stringify(err));
      setSubmitting(false);
    }
  };
  return (
    <View>
      <StatusBar style="auto" />
      <CustomHeader headerStyle={{ marginBottom: 24 }} />
      <View style={styles.main}>
        <View style={[styles.center, { marginBottom: 16 }]}>
          <Image style={styles.logo} source={LogixLogo} />
        </View>
        <View style={styles.center}>
          <Text style={styles.title}>Login to Your Account</Text>
        </View>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            values,
            touched,
            errors,
          }) => (
            <View>
              <TextInput
                onChangeText={handleChange("emailOrUsername")}
                onBlur={handleBlur("emailOrUsername")}
                value={values.emailOrUsername}
                label="Email or username"
                mode="outlined"
                left={<TextInput.Icon icon="email" />}
                style={styles.my(8)}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                label="Password"
                mode="outlined"
                secureTextEntry={!isPasswordShowing}
                left={<TextInput.Icon icon="lock" />}
                right={
                  isPasswordShowing ? (
                    <TextInput.Icon
                      icon="eye-off"
                      onPress={() => setIsPasswordShowing(false)}
                    />
                  ) : (
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => setIsPasswordShowing(true)}
                    />
                  )
                }
                style={styles.my(8)}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.button}
                labelStyle={styles.buttonLabel}
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                Sign in
              </Button>
            </View>
          )}
        </Formik>
        <TouchableOpacity style={styles.right}>
          <Text style={styles.forgotPasswordText}>Forgot the password?</Text>
        </TouchableOpacity>

        <View style={[styles.flexRow, styles.center, styles.my(30)]}>
          <Divider style={{ flex: 1 }} bold />
          <Text style={styles.continueWith}>or continue with</Text>
          <Divider style={{ flex: 1 }} bold />
        </View>

        <View style={[styles.flexRow, styles.center]}>
          <TouchableOpacity
            onPress={() => console.log("menu pressed")}
            style={[styles.oauthButton, { marginRight: 16 }]}
          >
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("menu pressed")}
            style={styles.oauthButton}
          >
            <FacebookIcon />
          </TouchableOpacity>
        </View>

        <View style={[styles.flexRow, styles.center, styles.my(30)]}>
          <Text style={styles.dontHaveAccount}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  center: { justifyContent: "center", alignItems: "center" },
  right: { justifyContent: "center", alignItems: "flex-end" },
  flexRow: {
    flexDirection: "row",
  },
  logo: {
    width: 200,
    height: 50,
  },
  main: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
    color: "#110E47",
  },
  button: {
    marginVertical: 16,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#110E47",
    fontWeight: "500",
  },
  continueWith: {
    color: "#9C9C9C",
    lineHeight: 16,
    textAlign: "center",
    flex: 1,
    fontWeight: "600",
  },
  dontHaveAccount: {
    fontWeight: "400",
    color: "#9C9C9C",
    lineHeight: 16,
    textAlign: "center",
  },
  my: (value) => ({
    marginVertical: value,
  }),
  oauthButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  errorText: {
    color: "red",
    fontSize: 13,
  },
});
