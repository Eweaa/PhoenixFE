import React, { useRef, useState } from "react";
import Camera from "../../Assets/Vector (2).png";
import BurnCardCSS from "./BurnCard.module.css";
import { Link } from "react-router-dom";

const BurnDegree = () => {
  // #region first degree burn
  const FDB = [
    "img0.jpg",
    "img10.jpg",
    "img100.jpg",
    "img1001.jpg",
    "img1004.jpg",
    "img1009.jpg",
    "img1010.jpg",
    "img1013.jpg",
    "img1014.jpg",
    "img1019.jpg",
    "img1025.jpg",
    "img1028.jpg",
    "img1035.jpg",
    "img104.jpg",
    "img1042.jpg",
    "img1043.jpg",
    "img1044.jpg",
    "img1045.jpg",
    "img105.jpg",
    "img1051.jpg",
    "img1054.jpg",
    "img1056.jpg",
    "img1058.jpg",
    "img106.jpg",
    "img1064.jpg",
    "img1074.jpg",
    "img1076.jpg",
    "img1078.jpg",
    "img1087.jpg",
    "img1091.jpg",
    "img1092.jpg",
    "img1096.jpg",
    "img110.jpg",
    "img1101.jpg",
    "img1103.jpg",
    "img1105.jpg",
    "img1107.jpg",
    "img111.jpg",
    "img1115.jpg",
    "img1117.jpg",
    "img1120.jpg",
    "img1130.jpg",
    "img1133.jpg",
    "img1136.jpg",
    "img1138.jpg",
    "img114.jpg",
    "img1149.jpg",
    "img1156.jpg",
    "img1159.jpg",
    "img116.jpg",
    "img1167.jpg",
    "img1170.jpg",
    "img1171.jpg",
    "img1172.jpg",
    "img1173.jpg",
    "img1175.jpg",
    "img1176.jpg",
    "img118.jpg",
    "img1180.jpg",
    "img1185.jpg",
    "img1188.jpg",
    "img119.jpg",
    "img1193.jpg",
    "img1194.jpg",
    "img1195.jpg",
    "img120.jpg",
    "img1201.jpg",
    "img1202.jpg",
    "img1209.jpg",
    "img121.jpg",
    "img1214.jpg",
    "img1220.jpg",
    "img1221.jpg",
    "img1230.jpg",
    "img1232.jpg",
    "img1233.jpg",
    "img1237.jpg",
    "img1238.jpg",
    "img1246.jpg",
    "img1249.jpg",
    "img125.jpg",
    "img1250.jpg",
    "img1260.jpg",
    "img1263.jpg",
    "img1266.jpg",
    "img1267.jpg",
    "img1280.jpg",
    "img1285.jpg",
    "img1288.jpg",
    "img1291.jpg",
    "img1297.jpg",
    "img13.jpg",
    "img1308.jpg",
    "img1312.jpg",
    "img1314.jpg",
    "img1315.jpg",
    "img1316.jpg",
    "img1317.jpg",
    "img133.jpg",
    "img1330.jpg",
    "img1335.jpg",
    "img1338.jpg",
    "img134.jpg",
    "img1343.jpg",
    "img1344.jpg",
    "img1345.jpg",
    "img1346.jpg",
    "img1352.jpg",
    "img1363.jpg",
    "img1365.jpg",
    "img1368.jpg",
    "img1371.jpg",
    "img1378.jpg",
    "img1379.jpg",
    "img1380.jpg",
    "img1382.jpg",
    "img1383.jpg",
    "img1384.jpg",
    "img1395.jpg",
    "img1396.jpg",
    "img1398.jpg",
    "img14.jpg",
    "img140.jpg",
    "img1403.jpg",
    "img1404.jpg",
    "img1405.jpg",
    "img141.jpg",
    "img1415.jpg",
    "img1419.jpg",
    "img142.jpg",
    "img1421.jpg",
    "img1422.jpg",
    "img1423.jpg",
    "img1429.jpg",
    "img1434.jpg",
    "img1439.jpg",
    "img144.jpg",
    "img147.jpg",
    "img150.jpg",
    "img151.jpg",
    "img156.jpg",
    "img157.jpg",
    "img158.jpg",
    "img16.jpg",
    "img160.jpg",
    "img163.jpg",
    "img168.jpg",
    "img169.jpg",
    "img171.jpg",
    "img177.jpg",
    "img179.jpg",
    "img18.jpg",
    "img180.jpg",
    "img182.jpg",
    "img183.jpg",
    "img185.jpg",
    "img19.jpg",
    "img192.jpg",
    "img193.jpg",
    "img194.jpg",
    "img196.jpg",
    "img198.jpg",
    "img20.jpg",
    "img201.jpg",
    "img207.jpg",
    "img208.jpg",
    "img209.jpg",
    "img216.jpg",
    "img220.jpg",
    "img223.jpg",
    "img224.jpg",
    "img226.jpg",
    "img228.jpg",
    "img23.jpg",
    "img230.jpg",
    "img234.jpg",
    "img235.jpg",
    "img239.jpg",
    "img243.jpg",
    "img245.jpg",
    "img246.jpg",
    "img249.jpg",
    "img25.jpg",
    "img256.jpg",
    "img257.jpg",
    "img264.jpg",
    "img267.jpg",
    "img268.jpg",
    "img269.jpg",
    "img27.jpg",
    "img271.jpg",
    "img272.jpg",
    "img273.jpg",
    "img274.jpg",
    "img276.jpg",
    "img279.jpg",
    "img28.jpg",
    "img280.jpg",
    "img283.jpg",
    "img284.jpg",
    "img288.jpg",
    "img29.jpg",
    "img292.jpg",
    "img296.jpg",
    "img298.jpg",
    "img3.jpg",
    "img30.jpg",
    "img302.jpg",
    "img303.jpg",
    "img304.jpg",
    "img306.jpg",
    "img307.jpg",
    "img308.jpg",
    "img309.jpg",
    "img316.jpg",
    "img317.jpg",
    "img322.jpg",
    "img324.jpg",
    "img325.jpg",
    "img33.jpg",
    "img330.jpg",
    "img331.jpg",
    "img332.jpg",
    "img336.jpg",
    "img338.jpg",
    "img340.jpg",
    "img341.jpg",
    "img342.jpg",
    "img343.jpg",
    "img346.jpg",
    "img347.jpg",
    "img348.jpg",
    "img351.jpg",
    "img352.jpg",
    "img354.jpg",
    "img355.jpg",
    "img358.jpg",
    "img359.jpg",
    "img362.jpg",
    "img366.jpg",
    "img367.jpg",
    "img368.jpg",
    "img369.jpg",
    "img37.jpg",
    "img372.jpg",
    "img373.jpg",
    "img38.jpg",
    "img380.jpg",
    "img381.jpg",
    "img383.jpg",
    "img386.jpg",
    "img389.jpg",
    "img39.jpg",
    "img390.jpg",
    "img391.jpg",
    "img392.jpg",
    "img393.jpg",
    "img394.jpg",
    "img397.jpg",
    "img399.jpg",
    "img4.jpg",
    "img402.jpg",
    "img408.jpg",
    "img409.jpg",
    "img41.jpg",
    "img412.jpg",
    "img413.jpg",
    "img414.jpg",
    "img415.jpg",
    "img417.jpg",
    "img418.jpg",
    "img419.jpg",
    "img420.jpg",
    "img422.jpg",
    "img424.jpg",
    "img425.jpg",
    "img428.jpg",
    "img429.jpg",
    "img43.jpg",
    "img430.jpg",
    "img434.jpg",
    "img438.jpg",
    "img439.jpg",
    "img44.jpg",
    "img441.jpg",
    "img442.jpg",
    "img443.jpg",
    "img444.jpg",
    "img447.jpg",
    "img448.jpg",
    "img45.jpg",
    "img450.jpg",
    "img452.jpg",
    "img454.jpg",
    "img455.jpg",
    "img456.jpg",
    "img458.jpg",
    "img46.jpg",
    "img462.jpg",
    "img463.jpg",
    "img464.jpg",
    "img465.jpg",
    "img466.jpg",
    "img469.jpg",
    "img470.jpg",
    "img473.jpg",
    "img475.jpg",
    "img478.jpg",
    "img48.jpg",
    "img480.jpg",
    "img481.jpg",
    "img482.jpg",
    "img485.jpg",
    "img486.jpg",
    "img488.jpg",
    "img489.jpg",
    "img491.jpg",
    "img492.jpg",
    "img493.jpg",
    "img494.jpg",
    "img496.jpg",
    "img497.jpg",
    "img501.jpg",
    "img503.jpg",
    "img505.jpg",
    "img506.jpg",
    "img510.jpg",
    "img512.jpg",
    "img514.jpg",
    "img515.jpg",
    "img518.jpg",
    "img519.jpg",
    "img520.jpg",
    "img521.jpg",
    "img522.jpg",
    "img523.jpg",
    "img525.jpg",
    "img529.jpg",
    "img53.jpg",
    "img531.jpg",
    "img532.jpg",
    "img535.jpg",
    "img539.jpg",
    "img541.jpg",
    "img542.jpg",
    "img546.jpg",
    "img547.jpg",
    "img548.jpg",
    "img552.jpg",
    "img553.jpg",
    "img554.jpg",
    "img555.jpg",
    "img556.jpg",
    "img557.jpg",
    "img56.jpg",
    "img561.jpg",
    "img562.jpg",
    "img563.jpg",
    "img565.jpg",
    "img567.jpg",
    "img568.jpg",
    "img569.jpg",
    "img570.jpg",
    "img571.jpg",
    "img572.jpg",
    "img574.jpg",
    "img575.jpg",
    "img576.jpg",
    "img578.jpg",
    "img579.jpg",
    "img581.jpg",
    "img584.jpg",
    "img585.jpg",
    "img588.jpg",
    "img590.jpg",
    "img592.jpg",
    "img594.jpg",
    "img595.jpg",
    "img596.jpg",
    "img597.jpg",
    "img598.jpg",
    "img599.jpg",
    "img601.jpg",
    "img602.jpg",
    "img604.jpg",
    "img605.jpg",
    "img607.jpg",
    "img610.jpg",
    "img611.jpg",
    "img612.jpg",
    "img618.jpg",
    "img62.jpg",
    "img620.jpg",
    "img621.jpg",
    "img622.jpg",
    "img625.jpg",
    "img626.jpg",
    "img628.jpg",
    "img63.jpg",
    "img630.jpg",
    "img631.jpg",
    "img633.jpg",
    "img634.jpg",
    "img637.jpg",
    "img639.jpg",
    "img640.jpg",
    "img642.jpg",
    "img646.jpg",
    "img647.jpg",
    "img650.jpg",
    "img652.jpg",
    "img653.jpg",
    "img654.jpg",
    "img655.jpg",
    "img656.jpg",
    "img659.jpg",
    "img660.jpg",
    "img661.jpg",
    "img662.jpg",
    "img663.jpg",
    "img664.jpg",
    "img665.jpg",
    "img666.jpg",
    "img668.jpg",
    "img67.jpg",
    "img674.jpg",
    "img675.jpg",
    "img676.jpg",
    "img68.jpg",
    "img681.jpg",
    "img682.jpg",
    "img683.jpg",
    "img685.jpg",
    "img687.jpg",
    "img689.jpg",
    "img691.jpg",
    "img693.jpg",
    "img694.jpg",
    "img695.jpg",
    "img696.jpg",
    "img698.jpg",
    "img699.jpg",
    "img702.jpg",
    "img703.jpg",
    "img708.jpg",
    "img712.jpg",
    "img717.jpg",
    "img718.jpg",
    "img72.jpg",
    "img720.jpg",
    "img727.jpg",
    "img729.jpg",
    "img73.jpg",
    "img730.jpg",
    "img733.jpg",
    "img734.jpg",
    "img735.jpg",
    "img737.jpg",
    "img738.jpg",
    "img74.jpg",
    "img746.jpg",
    "img750.jpg",
    "img757.jpg",
    "img758.jpg",
    "img76.jpg",
    "img767.jpg",
    "img769.jpg",
    "img772.jpg",
    "img775.jpg",
    "img778.jpg",
    "img780.jpg",
    "img781.jpg",
    "img782.jpg",
    "img786.jpg",
    "img791.jpg",
    "img796.jpg",
    "img80.jpg",
    "img803.jpg",
    "img806.jpg",
    "img808.jpg",
    "img810.jpg",
    "img816.jpg",
    "img817.jpg",
    "img818.jpg",
    "img828.jpg",
    "img831.jpg",
    "img837.jpg",
    "img839.jpg",
    "img841.jpg",
    "img844.jpg",
    "img848.jpg",
    "img85.jpg",
    "img850.jpg",
    "img859.jpg",
    "img867.jpg",
    "img868.jpg",
    "img869.jpg",
    "img879.jpg",
    "img885.jpg",
    "img889.jpg",
    "img89.jpg",
    "img892.jpg",
    "img90.jpg",
    "img903.jpg",
    "img904.jpg",
    "img905.jpg",
    "img908.jpg",
    "img91.jpg",
    "img911.jpg",
    "img919.jpg",
    "img922.jpg",
    "img928.jpg",
    "img93.jpg",
    "img931.jpg",
    "img932.jpg",
    "img934.jpg",
    "img937.jpg",
    "img938.jpg",
    "img94.jpg",
    "img947.jpg",
    "img958.jpg",
    "img968.jpg",
    "img969.jpg",
    "img97.jpg",
    "img975.jpg",
    "img98.jpg",
    "img985.jpg",
    "img986.jpg",
    "img987.jpg",
    "img991.jpg",
    "img992.jpg",
  ];
  // #endregion
  // #region second degree burn
  const SDB = [
    "img1.jpg",
    "img102.jpg",
    "img1021.jpg",
    "img1023.jpg",
    "img1026.jpg",
    "img1027.jpg",
    "img1029.jpg",
    "img103.jpg",
    "img1031.jpg",
    "img1032.jpg",
    "img1040.jpg",
    "img1041.jpg",
    "img1050.jpg",
    "img1060.jpg",
    "img1065.jpg",
    "img1069.jpg",
    "img107.jpg",
    "img1072.jpg",
    "img1075.jpg",
    "img1081.jpg",
    "img1085.jpg",
    "img1086.jpg",
    "img109.jpg",
    "img1093.jpg",
    "img1097.jpg",
    "img1099.jpg",
    "img1104.jpg",
    "img1106.jpg",
    "img1110.jpg",
    "img1111.jpg",
    "img1114.jpg",
    "img1119.jpg",
    "img112.jpg",
    "img1124.jpg",
    "img1125.jpg",
    "img1126.jpg",
    "img113.jpg",
    "img1131.jpg",
    "img1134.jpg",
    "img1137.jpg",
    "img1141.jpg",
    "img1145.jpg",
    "img1147.jpg",
    "img115.jpg",
    "img1151.jpg",
    "img1152.jpg",
    "img1154.jpg",
    "img1157.jpg",
    "img1158.jpg",
    "img1160.jpg",
    "img1161.jpg",
    "img1163.jpg",
    "img1165.jpg",
    "img1174.jpg",
    "img1178.jpg",
    "img1181.jpg",
    "img1182.jpg",
    "img1183.jpg",
    "img1187.jpg",
    "img1189.jpg",
    "img1192.jpg",
    "img1196.jpg",
    "img1198.jpg",
    "img1200.jpg",
    "img1205.jpg",
    "img1212.jpg",
    "img1213.jpg",
    "img1215.jpg",
    "img1216.jpg",
    "img1217.jpg",
    "img1219.jpg",
    "img122.jpg",
    "img1222.jpg",
    "img1224.jpg",
    "img1225.jpg",
    "img1227.jpg",
    "img123.jpg",
    "img1231.jpg",
    "img1234.jpg",
    "img1236.jpg",
    "img1239.jpg",
    "img1240.jpg",
    "img1241.jpg",
    "img1242.jpg",
    "img1244.jpg",
    "img1251.jpg",
    "img1257.jpg",
    "img1258.jpg",
    "img1259.jpg",
    "img1261.jpg",
    "img1262.jpg",
    "img1269.jpg",
    "img127.jpg",
    "img1271.jpg",
    "img1272.jpg",
    "img1274.jpg",
    "img1276.jpg",
    "img128.jpg",
    "img1283.jpg",
    "img1284.jpg",
    "img1286.jpg",
    "img1287.jpg",
    "img129.jpg",
    "img1290.jpg",
    "img1298.jpg",
    "img130.jpg",
    "img1301.jpg",
    "img1304.jpg",
    "img1305.jpg",
    "img1307.jpg",
    "img1310.jpg",
    "img1313.jpg",
    "img1318.jpg",
    "img132.jpg",
    "img1321.jpg",
    "img1322.jpg",
    "img1327.jpg",
    "img1331.jpg",
    "img1332.jpg",
    "img1336.jpg",
    "img1337.jpg",
    "img1342.jpg",
    "img1347.jpg",
    "img135.jpg",
    "img1350.jpg",
    "img1351.jpg",
    "img1353.jpg",
    "img1359.jpg",
    "img136.jpg",
    "img1364.jpg",
    "img1366.jpg",
    "img1367.jpg",
    "img1369.jpg",
    "img137.jpg",
    "img1372.jpg",
    "img1373.jpg",
    "img1375.jpg",
    "img1385.jpg",
    "img1387.jpg",
    "img1388.jpg",
    "img1389.jpg",
    "img139.jpg",
    "img1391.jpg",
    "img1393.jpg",
    "img1394.jpg",
    "img1400.jpg",
    "img1401.jpg",
    "img1402.jpg",
    "img1406.jpg",
    "img1410.jpg",
    "img1411.jpg",
    "img1413.jpg",
    "img1414.jpg",
    "img1416.jpg",
    "img1417.jpg",
    "img1427.jpg",
    "img1428.jpg",
    "img1431.jpg",
    "img1435.jpg",
    "img1436.jpg",
    "img1437.jpg",
    "img148.jpg",
    "img149.jpg",
    "img152.jpg",
    "img153.jpg",
    "img154.jpg",
    "img155.jpg",
    "img159.jpg",
    "img161.jpg",
    "img162.jpg",
    "img165.jpg",
    "img166.jpg",
    "img17.jpg",
    "img172.jpg",
    "img174.jpg",
    "img175.jpg",
    "img176.jpg",
    "img178.jpg",
    "img184.jpg",
    "img186.jpg",
    "img187.jpg",
    "img188.jpg",
    "img189.jpg",
    "img191.jpg",
    "img197.jpg",
    "img199.jpg",
    "img2.jpg",
    "img202.jpg",
    "img203.jpg",
    "img204.jpg",
    "img205.jpg",
    "img206.jpg",
    "img21.jpg",
    "img210.jpg",
    "img211.jpg",
    "img214.jpg",
    "img217.jpg",
    "img218.jpg",
    "img22.jpg",
    "img222.jpg",
    "img227.jpg",
    "img231.jpg",
    "img232.jpg",
    "img236.jpg",
    "img237.jpg",
    "img238.jpg",
    "img240.jpg",
    "img241.jpg",
    "img247.jpg",
    "img248.jpg",
    "img250.jpg",
    "img253.jpg",
    "img254.jpg",
    "img255.jpg",
    "img259.jpg",
    "img26.jpg",
    "img261.jpg",
    "img262.jpg",
    "img263.jpg",
    "img265.jpg",
    "img266.jpg",
    "img270.jpg",
    "img281.jpg",
    "img282.jpg",
    "img285.jpg",
    "img286.jpg",
    "img289.jpg",
    "img290.jpg",
    "img291.jpg",
    "img293.jpg",
    "img294.jpg",
    "img295.jpg",
    "img299.jpg",
    "img300.jpg",
    "img301.jpg",
    "img310.jpg",
    "img311.jpg",
    "img312.jpg",
    "img313.jpg",
    "img315.jpg",
    "img318.jpg",
    "img32.jpg",
    "img321.jpg",
    "img323.jpg",
    "img326.jpg",
    "img327.jpg",
    "img328.jpg",
    "img329.jpg",
    "img333.jpg",
    "img334.jpg",
    "img335.jpg",
    "img339.jpg",
    "img349.jpg",
    "img35.jpg",
    "img350.jpg",
    "img353.jpg",
    "img36.jpg",
    "img360.jpg",
    "img361.jpg",
    "img363.jpg",
    "img370.jpg",
    "img371.jpg",
    "img374.jpg",
    "img376.jpg",
    "img378.jpg",
    "img379.jpg",
    "img382.jpg",
    "img387.jpg",
    "img395.jpg",
    "img398.jpg",
    "img40.jpg",
    "img400.jpg",
    "img401.jpg",
    "img403.jpg",
    "img405.jpg",
    "img407.jpg",
    "img410.jpg",
    "img411.jpg",
    "img416.jpg",
    "img42.jpg",
    "img421.jpg",
    "img423.jpg",
    "img426.jpg",
    "img427.jpg",
    "img431.jpg",
    "img432.jpg",
    "img433.jpg",
    "img435.jpg",
    "img436.jpg",
    "img437.jpg",
    "img446.jpg",
    "img449.jpg",
    "img451.jpg",
    "img457.jpg",
    "img467.jpg",
    "img472.jpg",
    "img474.jpg",
    "img476.jpg",
    "img477.jpg",
    "img479.jpg",
    "img483.jpg",
    "img484.jpg",
    "img490.jpg",
    "img495.jpg",
    "img498.jpg",
    "img5.jpg",
    "img50.jpg",
    "img502.jpg",
    "img508.jpg",
    "img511.jpg",
    "img513.jpg",
    "img516.jpg",
    "img517.jpg",
    "img524.jpg",
    "img526.jpg",
    "img528.jpg",
    "img533.jpg",
    "img534.jpg",
    "img54.jpg",
    "img540.jpg",
    "img543.jpg",
    "img544.jpg",
    "img545.jpg",
    "img549.jpg",
    "img551.jpg",
    "img558.jpg",
    "img559.jpg",
    "img560.jpg",
    "img564.jpg",
    "img566.jpg",
    "img57.jpg",
    "img577.jpg",
    "img58.jpg",
    "img580.jpg",
    "img583.jpg",
    "img586.jpg",
    "img587.jpg",
    "img59.jpg",
    "img591.jpg",
    "img60.jpg",
    "img600.jpg",
    "img603.jpg",
    "img606.jpg",
    "img608.jpg",
    "img609.jpg",
    "img614.jpg",
    "img615.jpg",
    "img616.jpg",
    "img617.jpg",
    "img619.jpg",
    "img623.jpg",
    "img632.jpg",
    "img638.jpg",
    "img64.jpg",
    "img641.jpg",
    "img643.jpg",
    "img644.jpg",
    "img648.jpg",
    "img649.jpg",
    "img65.jpg",
    "img651.jpg",
    "img657.jpg",
    "img658.jpg",
    "img669.jpg",
    "img670.jpg",
    "img671.jpg",
    "img673.jpg",
    "img677.jpg",
    "img678.jpg",
    "img679.jpg",
    "img680.jpg",
    "img684.jpg",
    "img686.jpg",
    "img688.jpg",
    "img69.jpg",
    "img690.jpg",
    "img692.jpg",
    "img697.jpg",
    "img7.jpg",
    "img70.jpg",
    "img700.jpg",
    "img701.jpg",
    "img704.jpg",
    "img705.jpg",
    "img706.jpg",
    "img707.jpg",
    "img709.jpg",
    "img71.jpg",
    "img711.jpg",
    "img713.jpg",
    "img714.jpg",
    "img715.jpg",
    "img716.jpg",
    "img719.jpg",
    "img721.jpg",
    "img725.jpg",
    "img739.jpg",
    "img745.jpg",
    "img749.jpg",
    "img75.jpg",
    "img752.jpg",
    "img753.jpg",
    "img760.jpg",
    "img762.jpg",
    "img763.jpg",
    "img764.jpg",
    "img77.jpg",
    "img770.jpg",
    "img773.jpg",
    "img774.jpg",
    "img777.jpg",
    "img78.jpg",
    "img783.jpg",
    "img784.jpg",
    "img790.jpg",
    "img794.jpg",
    "img799.jpg",
    "img8.jpg",
    "img802.jpg",
    "img805.jpg",
    "img809.jpg",
    "img81.jpg",
    "img819.jpg",
    "img82.jpg",
    "img820.jpg",
    "img825.jpg",
    "img829.jpg",
    "img83.jpg",
    "img830.jpg",
    "img832.jpg",
    "img838.jpg",
    "img843.jpg",
    "img846.jpg",
    "img847.jpg",
    "img851.jpg",
    "img852.jpg",
    "img853.jpg",
    "img854.jpg",
    "img855.jpg",
    "img856.jpg",
    "img857.jpg",
    "img861.jpg",
    "img862.jpg",
    "img864.jpg",
    "img865.jpg",
    "img872.jpg",
    "img878.jpg",
    "img88.jpg",
    "img883.jpg",
    "img886.jpg",
    "img887.jpg",
    "img888.jpg",
    "img890.jpg",
    "img891.jpg",
    "img895.jpg",
    "img899.jpg",
    "img9.jpg",
    "img900.jpg",
    "img901.jpg",
    "img909.jpg",
    "img914.jpg",
    "img916.jpg",
    "img917.jpg",
    "img918.jpg",
    "img920.jpg",
    "img921.jpg",
    "img923.jpg",
    "img924.jpg",
    "img930.jpg",
    "img933.jpg",
    "img936.jpg",
    "img942.jpg",
    "img943.jpg",
    "img948.jpg",
    "img95.jpg",
    "img950.jpg",
    "img952.jpg",
    "img955.jpg",
    "img96.jpg",
    "img972.jpg",
    "img974.jpg",
    "img977.jpg",
    "img978.jpg",
    "img980.jpg",
    "img981.jpg",
    "img988.jpg",
    "img998.jpg",
    "img999.jpg",
  ];
  // #endregion
  // #region third degree burn
  const TDB = [
    "img1002.jpg",
    "img1005.jpg",
    "img1007.jpg",
    "img101.jpg",
    "img1011.jpg",
    "img1016.jpg",
    "img1033.jpg",
    "img1048.jpg",
    "img1055.jpg",
    "img1062.jpg",
    "img1063.jpg",
    "img1067.jpg",
    "img1068.jpg",
    "img1070.jpg",
    "img108.jpg",
    "img1090.jpg",
    "img11.jpg",
    "img1100.jpg",
    "img1118.jpg",
    "img1123.jpg",
    "img1127.jpg",
    "img1128.jpg",
    "img1129.jpg",
    "img1140.jpg",
    "img1143.jpg",
    "img1166.jpg",
    "img1169.jpg",
    "img117.jpg",
    "img1179.jpg",
    "img1186.jpg",
    "img12.jpg",
    "img1207.jpg",
    "img1210.jpg",
    "img1211.jpg",
    "img124.jpg",
    "img1243.jpg",
    "img1245.jpg",
    "img1253.jpg",
    "img1254.jpg",
    "img1256.jpg",
    "img126.jpg",
    "img1278.jpg",
    "img1281.jpg",
    "img1282.jpg",
    "img1292.jpg",
    "img1293.jpg",
    "img1302.jpg",
    "img1306.jpg",
    "img131.jpg",
    "img1320.jpg",
    "img1323.jpg",
    "img1324.jpg",
    "img1358.jpg",
    "img1362.jpg",
    "img1370.jpg",
    "img1376.jpg",
    "img138.jpg",
    "img1381.jpg",
    "img1392.jpg",
    "img1407.jpg",
    "img1408.jpg",
    "img1418.jpg",
    "img1426.jpg",
    "img143.jpg",
    "img1433.jpg",
    "img145.jpg",
    "img146.jpg",
    "img15.jpg",
    "img164.jpg",
    "img167.jpg",
    "img170.jpg",
    "img173.jpg",
    "img181.jpg",
    "img190.jpg",
    "img195.jpg",
    "img200.jpg",
    "img212.jpg",
    "img213.jpg",
    "img215.jpg",
    "img219.jpg",
    "img221.jpg",
    "img225.jpg",
    "img229.jpg",
    "img233.jpg",
    "img24.jpg",
    "img242.jpg",
    "img244.jpg",
    "img251.jpg",
    "img252.jpg",
    "img258.jpg",
    "img260.jpg",
    "img275.jpg",
    "img277.jpg",
    "img278.jpg",
    "img287.jpg",
    "img297.jpg",
    "img305.jpg",
    "img31.jpg",
    "img314.jpg",
    "img319.jpg",
    "img320.jpg",
    "img337.jpg",
    "img34.jpg",
    "img344.jpg",
    "img345.jpg",
    "img356.jpg",
    "img364.jpg",
    "img365.jpg",
    "img375.jpg",
    "img377.jpg",
    "img384.jpg",
    "img385.jpg",
    "img388.jpg",
    "img396.jpg",
    "img404.jpg",
    "img406.jpg",
    "img440.jpg",
    "img445.jpg",
    "img453.jpg",
    "img459.jpg",
    "img461.jpg",
    "img468.jpg",
    "img47.jpg",
    "img471.jpg",
    "img487.jpg",
    "img49.jpg",
    "img499.jpg",
    "img500.jpg",
    "img504.jpg",
    "img507.jpg",
    "img509.jpg",
    "img51.jpg",
    "img52.jpg",
    "img527.jpg",
    "img530.jpg",
    "img536.jpg",
    "img537.jpg",
    "img538.jpg",
    "img55.jpg",
    "img550.jpg",
    "img573.jpg",
    "img582.jpg",
    "img593.jpg",
    "img6.jpg",
    "img61.jpg",
    "img613.jpg",
    "img624.jpg",
    "img627.jpg",
    "img629.jpg",
    "img635.jpg",
    "img636.jpg",
    "img645.jpg",
    "img66.jpg",
    "img667.jpg",
    "img672.jpg",
    "img710.jpg",
    "img724.jpg",
    "img741.jpg",
    "img748.jpg",
    "img751.jpg",
    "img765.jpg",
    "img771.jpg",
    "img785.jpg",
    "img79.jpg",
    "img792.jpg",
    "img795.jpg",
    "img798.jpg",
    "img804.jpg",
    "img811.jpg",
    "img815.jpg",
    "img821.jpg",
    "img822.jpg",
    "img824.jpg",
    "img827.jpg",
    "img833.jpg",
    "img834.jpg",
    "img84.jpg",
    "img845.jpg",
    "img849.jpg",
    "img86.jpg",
    "img87.jpg",
    "img871.jpg",
    "img873.jpg",
    "img882.jpg",
    "img884.jpg",
    "img907.jpg",
    "img910.jpg",
    "img92.jpg",
    "img945.jpg",
    "img949.jpg",
    "img953.jpg",
    "img957.jpg",
    "img960.jpg",
    "img961.jpg",
    "img967.jpg",
    "img971.jpg",
    "img973.jpg",
    "img983.jpg",
    "img99.jpg",
    "img990.jpg",
    "img993.jpg",
  ];
  // #endregion
  const [file, setFiles] = useState(null);
  const [degree, setDegree] = useState();
  const [message, setMessage] = useState(null);
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(true);
  const [modal, setModal] = useState(false);

  const onImageChange = (e) => {
    setModal(true)
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    setShow(false)
    let name = e.target.files[0].name
    if (FDB.find((e) => e === name)){
      setDegree("First Degree Burn");
      setMessage("move to see the first aids for first degree burn");
    }
    else if (SDB.find((e) => e === name)){
      setDegree("Second Degree Burn")
      setMessage("move to see the first aids for the second degree burn")
    }
    else if (TDB.find((e) => e === name)){
      setDegree("Third Degree Burn")
      setMessage("move to see the first aids for the third degree burn")
    }
    else{
      setDegree("Couldn't identify the degree")
      setMessage("Couldn't identify the degree")
    }
  }

  const details = (e) => {

    if (FDB.find((e) => e === file.name)) {
      setDegree("First Degree Burn");
      setMessage("move to see the first aids for first degree burn");
    } else if (SDB.find((e) => e === file.name)) {
      setDegree("Second Degree Burn");
      setMessage("move to see the first aids for second degree burn");
    } else if (TDB.find((e) => e === file.name)) {
      setDegree("Third Degree Burn");
      setMessage("move to see the first aids for third degree burn");
    } else setDegree("Couldn't identify");
  };

  return (
    <div className="p-2">
      <h2
        style={{
          textAlign: "center",
          color: "#008894",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.12)",
        }}
        className="px-2 pb-2"
      >
        Identify the degree of burn
      </h2>
      <div className={[BurnCardCSS.BurnCard, "p-4"].join(" ")}>
        <div className={BurnCardCSS.warning}>
          <p className="p-2" style={{ color: "white" }}>
            ⚠️ Please note that the image you choose must be an RGB image
          </p>
        </div>
        <label htmlFor="uploadFile" className="p-4" style={{display: show ? 'block' : 'none'}}>
          <img src={Camera} className="p-4" /> <br />
          Drop an image here <br />
          {/* <input
            type="file"
            id="uploadFile"
            ref={imageRef}
            // onChange={ e => setFiles(e.target.value)}
            onChange={() => setFiles(imageRef.current.files[0])}
          /> */}
          <input type="file" id="uploadFile" onChange={onImageChange} className="filetype" />
        </label>

        <div style={{display: show ? 'none' : 'block'}}>
          <img alt="preview image" src={image}/>
        </div>


        <Link to='/watch' className={[BurnCardCSS.result, "p-2 mt-2"].join(" ")} style={{ display: message === null ? "none" : "block", textDecoration: 'none'}}>
          {degree !== null && degree !== undefined && message}
        </Link>

        {/* <button className="p-2" onClick={details}>
          Result
        </button> */}
        
        <div id="myModal" className={BurnCardCSS.modal} style={{display: modal ? 'block' : 'none'}}>
          <div className={BurnCardCSS.modalContent}>
            <span className={BurnCardCSS.close} style={{cursor: 'pointer'}} onClick={() => setModal(false)}>&times;</span>
            <p>{degree}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BurnDegree;
