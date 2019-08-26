const data = getData().split('\n').map(l => l.split(';').map(x => eval(x) + ''));

const header = data[0];
const res = data.slice(1).map(r => header.reduce((obj, h, i) => {
  obj[h] = r[i];
  return obj;
}, {}));
const sizes = res.reduce((obj, row) => {
  Object.keys(row).forEach((k) => obj[k] = Math.max(obj[k] || 0, row[k] && (row[k] + '').length+1 || 0));
  return obj;
}, {});
console.log(`${'Qt'.padStart(sizes.Quantity)}\t${'Designation'.padEnd(sizes.Designation)}\t${'Package'.padEnd(sizes.Package)}`);
console.log(res.map(r => `${r.Quantity.padStart(sizes.Quantity)}\t${r.Designation.padEnd(sizes.Designation)}\t${r.Package.padEnd(sizes.Package)}`).join('\n'));

function getData() {
  return `"Id";"Designator";"Package";"Quantity";"Designation";"Supplier";
1;"L6";"brazilFlag";1;"BRFlag";;;
2;"L5";"osh-logo";1;"OSHLogo";;;
3;"L4";"elongateLabelMask";1;"ElongateLabelMask";;;
4;"L3";"elongateLabel";1;"ElongateLabel";;;
5;"L2";"elongateLogo";1;"ElongateLogoPlated";;;
6;"L1";"acheronLong";1;"AcheronLogo";;;
7;"D54,D53,D52,D51,D50,D49,D48,D47,D46,D45,D44,D43,D42,D41,D40,D39,D38,D37,D36,D35,D34,D33,D32,D31,D30,D29,D28,D27,D26,D25,D24,D23,D22,D21,D20,D19,D18,D17,D16,D15,D14,D13,D12,D11,D10,D9,D8,D7,D6,D5,D4,D3,D2,D1";"D_THT_7.62mm_SOD-123";54;"1N4148";;;
8;"X1";"Crystal_SMD_5032-4Pin-HandSolder";1;"16MHz";;;
9;"U3";"TQPF-44_10x10mm_P0.8mm";1;"ATMEGA32U4";;;
10;"U2";"SOT-23-6";1;"USBLC6-2SC6";;;
11;"SW_RST1";"smdPushBtn";1;"SW_Push";;;
12;"SW54,SW53,SW52,SW51,SW50,SW49,SW45,SW43,SW42,SW41,SW40,SW38,SW37,SW36,SW35,SW34,SW33,SW32,SW31,SW29,SW28,SW27,SW25,SW24,SW23,SW22,SW21,SW20,SW19,SW18,SW17,SW15,SW14,SW13,SW12,SW11,SW10,SW9,SW8,SW7,SW6,SW5,SW4,SW3,SW2,SW1";"MXA100";46;"MXSwitch";;;
13;"SW48";"MXA275R";1;"MXSwitch";;;
14;"SW47";"MXA225R";1;"MXSwitch";;;
15;"SW46,SW44,SW39,SW16";"MXA125";4;"MXSwitch";;;
16;"SW30,SW26";"MXA175";2;"MXSwitch";;;
17;"RSH1";"R_0805_2012Metric_Pad1.15x1.40mm_HandSolder";1;"1M";;;
18;"RRST2";"R_0805_2012Metric_Pad1.15x1.40mm_HandSolder";1;"330R";;;
19;"RRST1";"R_0805_2012Metric_Pad1.15x1.40mm_HandSolder";1;"4.7k";;;
20;"RHWB1";"R_0805_2012Metric_Pad1.15x1.40mm_HandSolder";1;"1k";;;
21;"RF1";"R_0805_2012Metric_Pad1.15x1.40mm_HandSolder";1;"10k";;;
22;"RDP1,RDM1";"R_0805_2012Metric_Pad1.15x1.40mm_HandSolder";2;"22";;;
23;"J1";"USB_MiniB_Hirose_UX60-MB-5S8";1;"USB_B_Mini";;;
24;"F1";"Fuse_1812_4532Metric_Pad1.30x3.40mm_HandSolder";1;"Polyfuse";;;
25;"DF1";"D_SOD-123";1;"RB060M-60TR";;;
26;"CX2,CX1";"C_0805_2012Metric_Pad1.15x1.40mm_HandSolder";2;"8.2pF";;;
27;"CUSB1,CSH1,CRST1,CB6,CB5,CB4,CB3,CB2";"C_0805_2012Metric_Pad1.15x1.40mm_HandSolder";8;"100nF";;;
28;"CU1,CB1";"C_0805_2012Metric_Pad1.15x1.40mm_HandSolder";2;"1uF";;;
29;"CF1";"C_0805_2012Metric_Pad1.15x1.40mm_HandSolder";1;"1u";;;`;
}
