const base = "/api/";

export const PACKAGE = {
  PACKAGE_LIST: `${base}packages`,
  PACKAGE_SIZE: `${base}packages/size`,
  PACKAGE_HISTORY: `${base}packages/package-history`,
  SIMILAR_PACKAGE: `${base}packages/similar-packages`,
  PACKAGE_DOWNLOADS: `${base}packages/downloads`, //https://github.com/npm/registry/blob/master/docs/download-counts.md
  PACKAGE_GIT_REPO: `${base}packages/repos`,
};
