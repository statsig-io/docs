const { execSync } = require("child_process");

const plugin = (options) => {
  const transformer = async (ast, vfile) => {
    const path = vfile.path;
    if (!path.includes("docs/client/") && !path.includes("docs/server/")) {
      return;
    }

    const child = ast.children.find(
      (c) =>
        c.type === "export" &&
        c.value.includes("lastSDKDocsUpdate: HOOK__SDKDocUpdate")
    );
    if (!child) {
      return;
    }

    const epoch = execSync(
      `git log -n 1 --pretty=format:%at -- ${vfile.path}`
    )?.toString();

    child.value = child.value.replace("HOOK__SDKDocUpdate", `${epoch}`);
  };

  return transformer;
};

module.exports = plugin;
