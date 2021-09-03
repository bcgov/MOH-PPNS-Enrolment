import {
  getISODateString,
  isValidISODateString,
} from 'common-lib-vue';

export const bcPostalCodeValidator = (value) => {
  const criteria = RegExp('^[Vv]\\d[A-Za-z][ ]?\\d[A-Za-z]\\d$');
  return criteria.test(value);
};

export const clinicNameValidator = (value) => {
  const criteria = /^[0-9a-zA-Z-.' ]*$/;
  return criteria.test(value);
};

export const clarificationCodeValidator = (value) => {
  const codes = ["AC","A1","A2","A3","A4","A5","A6","A7","A8","BA","BB","BR","B1","B2","B3","B4","B5","B6","B7","B8","B9","CA","CB","CC","CE","CF","CH","CL","CM","CN","CR","CS","CV","C2","C3","C4","C5","C6","C7","C8","D1","D2","D3","D4","D5","E1","E2","E3","F1","F2","F3","F4","F5","F6","F7","GF","GK","GR","G1","G2","G3","G4","G5","G6","G7","G8","G9","H1","H2","H3","H4","H5","H6","H7","H8","H9","KK","KL","KM","K1","K2","K3","K4","K5","K6","K7","K8","K9","LS","L1","L2","L3","L4","L5","L6","L7","L8","MB","MC","MH","MR","MT","M1","M2","M3","M4","M5","M6","M7","M8","M9","NA","NT","NV","N1","N2","N3","N4","N5","OL","OS","PA","PF","PG","PI","PN","PQ","PR","PV","P1","P2","P3","P4","P5","P6","P7","P8","P9","Q1","Q2","Q3","Q4","R1","R2","R3","R4","SA","SB","SC","SD","SE","SG","SI","SK","SL","SM","SN","SO","SP","SQ","SS","ST","SU","SV","SZ","S1","S2","S3","S4","S5","S6","S7","S8","S9","TA","TC","TK","TL","TP","TR","T1","T2","T3","T4","T5","T6","T7","T8","T9","U1","VM","V1","V2","WE","WY","W1","W3","W4","W5","W6","W7","W8","Y1","Z1"];
  return codes.indexOf(value) > -1;
};

export const diagnosticCodeValidator = (value) => {
  const codes = ["001","100","200","300","401","500","600","700","800","900","V01","01A","002","101","201","301","402","501","601","701","801","901","V02","02A","003","102","202","302","403","502","602","702","802","902","V03","03A","004","103","203","303","404","503","603","703","803","903","V04","04A","005","104","204","304","405","504","604","704","804","904","V05","05A","006","110","205","305","410","505","605","705","805","905","V06","06A","007","111","206","306","411","506","606","706","806","906","V07","07A","008","112","207","307","412","507","607","707","807","907","V10","08A","009","113","208","308","413","508","608","708","808","908","V11","10A","010","114","210","309","414","510","610","709","809","909","V12","11A","011","115","211","310","415","511","611","710","810","910","V13","12A","012","116","212","311","416","512","614","711","811","911","V14","31A","013","117","213","312","417","513","615","712","812","912","V15","32A","014","118","214","313","420","514","616","713","813","913","V16","33A","015","120","215","314","421","515","617","714","814","914","V17","34A","016","121","216","315","422","516","618","715","815","915","V18","35A","017","122","217","316","423","517","619","716","816","916","V19","36A","018","123","218","317","424","518","620","717","817","917","V20","42A","020","124","219","318","425","519","621","718","818","918","V21","43A","021","125","220","319","426","520","622","719","819","919","V22","44A","022","126","221","320","427","521","623","720","820","920","V23","45A","023","127","222","321","428","522","624","721","821","921","V24","01B","024","128","223","322","429","523","625","722","822","922","V25","02B","025","129","224","323","430","524","626","723","823","923","V26","03B","026","130","225","324","431","525","627","724","824","924","V27","06B","027","131","226","325","432","526","628","725","825","925","V28","08B","030","132","227","326","433","527","629","726","826","926","V30","10B","031","133","228","330","434","528","630","727","827","927","V31","11B","032","134","229","331","435","529","631","728","828","928","V32","12B","033","135","230","332","436","530","632","729","829","929","V33","15B","034","136","231","333","437","531","633","730","830","930","V34","16B","035","137","232","334","438","532","634","731","831","931","V35","17B","036","138","233","335","440","533","635","732","832","932","V36","18B","037","139","234","336","441","534","636","733","833","933","V37","19B","038","140","235","337","442","535","637","734","834","934","V38","20B","039","141","236","340","443","536","638","735","835","935","V39","21B","040","142","237","341","444","537","639","736","836","936","V40","22B","041","143","238","342","445","540","640","737","837","937","V41","23B","042","144","239","343","446","541","641","738","838","938","V42","30B","043","145","240","344","447","542","642","739","839","939","V43","31B","044","146","241","345","448","543","643","740","840","940","V44","32B","045","147","242","346","451","550","644","741","841","941","V45","33B","046","148","243","347","452","551","645","742","842","942","V46","34B","047","149","244","348","453","552","646","743","843","943","V47","35B","048","150","245","349","454","553","647","744","844","944","V48","36B","049","151","246","350","455","555","648","745","845","945","V49","37B","050","152","250","351","456","556","650","746","846","946","V50","38B","051","153","251","352","457","557","651","747","847","947","V51","50B","052","154","252","353","458","558","652","748","848","948","V52","55B","053","155","253","354","459","560","653","749","850","949","V53","60B","054","156","254","355","460","561","654","750","851","950","V54","65B","055","157","255","356","461","562","655","751","852","951","V55","66B","056","158","256","357","462","563","656","752","853","952","V56","01E","057","159","257","358","463","564","657","753","854","953","V57","01F","060","160","258","359","464","565","658","754","860","954","V58","01H","061","161","259","360","465","566","659","755","861","955","V59","01L","062","162","260","361","466","567","660","756","862","956","V60","01X","063","163","261","362","470","568","661","757","863","957","V61","01Z","064","164","262","363","471","569","662","758","864","958","V62","E01","065","165","263","364","472","570","663","759","865","959","V63","E02","066","170","264","365","473","571","664","760","866","960","V64","E03","070","171","265","366","474","572","665","761","867","961","V65","E04","071","172","266","367","475","573","666","762","868","962","V66","E05","072","173","267","368","476","574","667","763","869","963","V67","E06","073","174","268","369","477","575","668","764","870","964","V68","E07","074","175","269","370","478","576","669","765","871","965","V70","E08","075","179","270","371","480","577","670","766","872","966","V71","E09","076","180","271","372","481","578","671","767","873","967","V72","E10","077","181","272","373","482","579","672","768","874","968","V73","E91","078","182","273","374","483","580","673","769","875","969","V74","E92","079","183","274","375","484","581","674","770","876","970","V75","E93","080","184","275","376","485","582","675","771","877","971","V76","E94","081","185","276","377","486","583","676","772","878","972","V77","E95","082","186","277","378","487","584","680","773","879","973","V78","E96","083","187","278","379","490","585","681","774","880","974","V79","E97","084","188","279","380","491","586","682","775","881","975","V80","E98","085","189","280","381","492","587","683","776","882","976","V81","E99","086","190","281","382","493","588","684","777","883","977","V82","087","191","282","383","494","589","685","778","884","978","088","192","283","384","495","590","686","779","885","979","090","193","284","385","496","591","690","780","886","980","091","194","285","386","592","691","781","887","981","092","195","286","387","593","692","782","890","982","093","196","287","388","594","693","783","891","983","094","197","288","389","595","694","784","892","984","095","198","289","390","596","695","785","893","985","096","199","290","391","597","696","786","894","986","097","291","392","598","697","787","895","987","098","292","393","599","698","788","896","988","099","293","394","789","897","989","294","395","790","990","295","396","791","991","296","397","792","992","297","398","793","993","298","794","994","299","795","995","796","996","797","997","798","998","799","999"];
  return codes.indexOf(value) > -1;
};

export const birthDateValidator = (_, vm) => {
  const data = vm.birthDateData;
  if (!data || (!data.year && typeof data.month !== 'number' && !data.day)) {
    return true;
  }
  const year = data.year;
  const month = data.month;
  const day = data.day;
  if (!(year && typeof month === 'number' && day)
    && (year || typeof month === 'number' || day)) {
    return false;
  }
  const isoDateString = getISODateString(year, month + 1, day);
  return isValidISODateString(isoDateString);
};

export const serviceDateValidator = (_, vm) => {
  const data = vm.serviceDateData;
  if (!data || (!data.year && typeof data.month !== 'number' && !data.day)) {
    return true;
  }
  const year = data.year;
  const month = data.month;
  const day = data.day;
  if (!(year && typeof month === 'number' && day)
    && (year || typeof month === 'number' || day)) {
    return false;
  }
  const isoDateString = getISODateString(year, month + 1, day);
  return isValidISODateString(isoDateString);
};
