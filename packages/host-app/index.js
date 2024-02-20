import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {ScriptManager, Federated, Script} from '@callstack/repack/client';

// ScriptManager.shared.addResolver(async (scriptId, caller) => {
//   const resolveURL = Federated.createURLResolver({
//     containers: {
//       MiniApp: 'http://localhost:9000/[name][ext]',
//       BookingApp: 'http://localhost:9001/[name][ext]',
//     },
//   });

//   const url = resolveURL(scriptId, caller);
//   if (url) {
//     return {
//       url,
//       query: {
//         platform: Platform.OS,
//       },
//     };
//   }
// });

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  // const containers = await fetchURLs();
  // // const resolveURL = Federated.createURLResolver({
  // //   containers,
  // // });
  const resolveURL = Federated.createURLResolver({
    containers: {
      MiniApp: 'http://localhost:9000/[name][ext]',
      BookingApp: 'http://localhost:9001/[name][ext]',
    },
  });

  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false,
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
