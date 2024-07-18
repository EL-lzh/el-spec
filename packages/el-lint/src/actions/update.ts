import { execSync } from 'child_process'
import ora from 'ora';
import log from '../utils/log';
import nmpType from '../utils/npm-type'
import { PKG_NAME, PKG_VERSION } from '../utils/constants';

/**
 * 检查最新版本号
 * @returns 
 */
const checkLatestVersion = async (): Promise<string | null> => {
  const npm = await nmpType;
  const latestVersion = execSync(`${npm} view ${PKG_NAME} version`).toString().trim();
  if (PKG_VERSION === latestVersion) {
    return null;
  }

  const compareArr = PKG_VERSION.split('.').map(Number);
  const beCompareArr = latestVersion.split('.').map(Number);

  for(let i = 0; i < compareArr.length; i++) {
    if (compareArr[i] > beCompareArr[i]) {
      return null;
    } else {
      return latestVersion;
    }
  }
};

export default async (install = true) => {
  const checking = ora(`[${PKG_NAME}] 正在检查最新版本...`);
  checking.start();
  
  try {
    const npm = await nmpType;
    const latestVersion = await checkLatestVersion();
    checking.stop();

    if (latestVersion && install) {
      const update = ora(`[${PKG_NAME}] 存在新版本，将升级至 ${latestVersion}`);

      update.start();
      execSync(`${npm} install -g ${PKG_NAME}`);

      update.stop();
    } else if(latestVersion) {
      log.warn(`最新版本为 ${latestVersion}，本地版本为 ${PKG_NAME}，清尽快升级到最新版本。\n可以执行 ${npm} install -g ${PKG_NAME}@latest 更新`);
    } else if(install) {
      log.info(`当前没有可用的更新`)
    }
  } catch(e) {
    checking.stop();
    log.error(e);
  }
};