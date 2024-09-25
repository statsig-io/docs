---
title: How to set up Feature Flags in Java
sidebar_label: Feature Flags in Java
slug: /developer-guides/feature-flags-in-java
displayed_sidebar: cloud
---

Integrating feature flags into a Java application using the Statsig SDK involves several steps, starting with creating a basic "Hello World" Java application. Then, you will integrate the Statsig SDK to manage feature flags within your application. Lastly, I will guide you through the process of creating and managing feature flags in the Statsig console.

### Step 1: Create a Basic Java "Hello World" Application

1. **Setup Your Java Environment**:
    - Ensure Java is installed on your system. You can check by running `java -version` in your terminal. If Java is not installed, download and install it from the [official Java website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
    - Ensure you have a Java IDE (Integrated Development Environment) like IntelliJ IDEA, Eclipse, or a simple text editor for coding.

2. **Create Your Java Project**:
    - Open your IDE and create a new Java project. If using a text editor, create a new directory for your project and open it in your text editor.

3. **Write the "Hello World" Program**:
    - Create a new Java class named `HelloWorld.java`.
    - Add the following code to your class:
        ```java
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }
        ```

4. **Run Your Application**:
    - Run the application from your IDE or from the terminal using `java HelloWorld.java`. You should see "Hello, World!" printed to the console.

### Step 2: Integrating Statsig for Feature Flags

1. **Add Statsig SDK Dependency**:
    - If using Maven, add the following dependency to your `pom.xml` file:
        ```xml
        <dependency>
            <groupId>com.statsig</groupId>
            <artifactId>java-server-sdk</artifactId>
            <version>1.8.0</version>
        </dependency>
        ```
    - For Gradle, add the following to your `build.gradle` file:
        ```groovy
        implementation 'com.statsig:java-server-sdk:1.8.0'
        ```

2. **Initialize Statsig and Check a Feature Flag**:
    - Modify your `HelloWorld` class to initialize Statsig and check a feature flag:
        ```java
        import com.statsig.sdk.Statsig;
        import com.statsig.sdk.StatsigOptions;
        import com.statsig.sdk.StatsigServer;

        public class HelloWorld {

            public static void main(String[] args) {
                StatsigServer statsigServer = new StatsigServer("your-server-secret-key", new StatsigOptions());

                try {
                    boolean featureEnabled = statsigServer.checkGate("example_feature_flag", "user_id");
                    
                    if (featureEnabled) {
                        System.out.println("Feature Flag is enabled!");
                    } else {
                        System.out.println("Hello, World!");
                    }
                } finally {
                    statsigServer.shutdown();
                }
            }
        }
        ```
    - Replace `"your-server-secret-key"` with your actual Statsig Server Secret Key.
    - Replace `"example_feature_flag"` with the name of your feature flag.
    - Note: The server secret key should be kept secure and not exposed in client-facing applications.

### Step 3: Creating Feature Flags in the Statsig Console

1. **Sign Up/Login to Statsig**:
    - Visit the [Statsig website](https://www.statsig.com/) and sign up for an account or log in.

2. **Create a New Project**:
    - In the Statsig dashboard, create a new project for your application.

3. **Navigate to Feature Flags**:
    - Go to the "Feature Flags" section in the Statsig console dashboard.

4. **Create a New Feature Flag**:
    - Click on "Create Feature Flag".
    - Enter a name for your feature flag (e.g., `example_feature_flag`).
    - Configure targeting rules as needed.
    - Save your feature flag.

    ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle Your Feature Flag**:
    - You can now enable or disable your feature flag from the dashboard and configure it as needed.

By following these steps, you have successfully created a Java application that uses Statsig for feature flag management. This setup allows you to dynamically control features and conduct experiments within your application, facilitating smoother feature rollouts and better product management.

  