//index.js
//获取应用实例
//测试分支 2020/02/07， 数据输入错误后，可以矫正操作


var listData=[
  { index: 1, date: '2019/01/02', indexValue: 544.01, MCAD: 1.67, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 2, date: '2019/01/03', indexValue: 556.09, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 3, date: '2019/01/04', indexValue: 593.74, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 4, date: '2019/01/07', indexValue: 594.37, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 5, date: '2019/01/08', indexValue: 596.23, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 6, date: '2019/01/09', indexValue: 597.22, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 7, date: '2019/01/10', indexValue: 590.26, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 8, date: '2019/01/11', indexValue: 593.75, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 9, date: '2019/01/14', indexValue: 591.59, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 10, date: '2019/01/15', indexValue: 606.73, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 11, date: '2019/01/16', indexValue: 601.04, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 12, date: '2019/01/17', indexValue: 594.92, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 13, date: '2019/01/18', indexValue: 602.65, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 14, date: '2019/01/21', indexValue: 599.1, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 15, date: '2019/01/22', indexValue: 590.09, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 16, date: '2019/01/23', indexValue: 589.1, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 17, date: '2019/01/24', indexValue: 598.42, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 18, date: '2019/01/25', indexValue: 596.33, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 19, date: '2019/01/28', indexValue: 594.93, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 20, date: '2019/01/29', indexValue: 589.46, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 21, date: '2019/01/30', indexValue: 581.98, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 22, date: '2019/01/31', indexValue: 588.9, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 23, date: '2019/02/01', indexValue: 604.81, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 24, date: '2019/02/11', indexValue: 615.22, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 25, date: '2019/02/12', indexValue: 619.53, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 26, date: '2019/02/13', indexValue: 641.03, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 27, date: '2019/02/14', indexValue: 638.79, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 28, date: '2019/02/15', indexValue: 624.95, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 29, date: '2019/02/18', indexValue: 660.95, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 30, date: '2019/02/19', indexValue: 665.2, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 31, date: '2019/02/20', indexValue: 668.94, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 32, date: '2019/02/21', indexValue: 674.21, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 33, date: '2019/02/22', indexValue: 739.45, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 34, date: '2019/02/25', indexValue: 813.4, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 35, date: '2019/02/26', indexValue: 797.74, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 36, date: '2019/02/27', indexValue: 792.03, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 37, date: '2019/02/28', indexValue: 764.17, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 38, date: '2019/03/01', indexValue: 790.25, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 39, date: '2019/03/04', indexValue: 796.26, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 40, date: '2019/03/05', indexValue: 798.27, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 41, date: '2019/03/06', indexValue: 841.35, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 42, date: '2019/03/07', indexValue: 873.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 43, date: '2019/03/08', indexValue: 797.21, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 44, date: '2019/03/11', indexValue: 807.81, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 45, date: '2019/03/12', indexValue: 817.09, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 46, date: '2019/03/13', indexValue: 802.02, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 47, date: '2019/03/14', indexValue: 774.48, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 48, date: '2019/03/15', indexValue: 785.08, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 49, date: '2019/03/18', indexValue: 804.38, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 50, date: '2019/03/19', indexValue: 795.98, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 51, date: '2019/03/20', indexValue: 807.32, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 52, date: '2019/03/21', indexValue: 819.64, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 53, date: '2019/03/22', indexValue: 810.48, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 54, date: '2019/03/25', indexValue: 779.48, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 55, date: '2019/03/26', indexValue: 755.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 56, date: '2019/03/27', indexValue: 758.91, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 57, date: '2019/03/28', indexValue: 753.29, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 58, date: '2019/03/29', indexValue: 812.4, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 59, date: '2019/04/01', indexValue: 828.83, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 60, date: '2019/04/02', indexValue: 826.29, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 61, date: '2019/04/03', indexValue: 867.37, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 62, date: '2019/04/04', indexValue: 867.77, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 63, date: '2019/04/08', indexValue: 848.23, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 64, date: '2019/04/09', indexValue: 849.19, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 65, date: '2019/04/10', indexValue: 837.11, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 66, date: '2019/04/11', indexValue: 818.1, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 67, date: '2019/04/12', indexValue: 821.75, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 68, date: '2019/04/15', indexValue: 804.68, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 69, date: '2019/04/16', indexValue: 826.67, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 70, date: '2019/04/17', indexValue: 819.12, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 71, date: '2019/04/18', indexValue: 813.27, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 72, date: '2019/04/19', indexValue: 823.86, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 73, date: '2019/04/22', indexValue: 803.38, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 74, date: '2019/04/23', indexValue: 808.2, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 75, date: '2019/04/24', indexValue: 815.62, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 76, date: '2019/04/25', indexValue: 790.29, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 77, date: '2019/04/26', indexValue: 795.41, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 78, date: '2019/04/29', indexValue: 762.82, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 79, date: '2019/04/30', indexValue: 767.07, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 80, date: '2019/05/06', indexValue: 694.24, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 81, date: '2019/05/07', indexValue: 704.12, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 82, date: '2019/05/08', indexValue: 693.76, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 83, date: '2019/05/09', indexValue: 683.96, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 84, date: '2019/05/10', indexValue: 715.19, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 85, date: '2019/05/13', indexValue: 698.74, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 86, date: '2019/05/14', indexValue: 691.11, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 87, date: '2019/05/15', indexValue: 703.6, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 88, date: '2019/05/16', indexValue: 703.59, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 89, date: '2019/05/17', indexValue: 674.07, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 90, date: '2019/05/20', indexValue: 681.08, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 91, date: '2019/05/21', indexValue: 690.99, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 92, date: '2019/05/22', indexValue: 683.74, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 93, date: '2019/05/23', indexValue: 682.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 94, date: '2019/05/24', indexValue: 681.85, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 95, date: '2019/05/27', indexValue: 701.59, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 96, date: '2019/05/28', indexValue: 702, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 97, date: '2019/05/29', indexValue: 698.5, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 98, date: '2019/05/30', indexValue: 689.51, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 99, date: '2019/05/31', indexValue: 685.71, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 100, date: '2019/06/03', indexValue: 685.89, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 101, date: '2019/06/04', indexValue: 683.69, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 102, date: '2019/06/05', indexValue: 689.06, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 103, date: '2019/06/06', indexValue: 682.11, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 104, date: '2019/06/10', indexValue: 673.34, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 105, date: '2019/06/11', indexValue: 708.9, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 106, date: '2019/06/12', indexValue: 700.17, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 107, date: '2019/06/13', indexValue: 704.99, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 108, date: '2019/06/14', indexValue: 690.91, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 109, date: '2019/06/17', indexValue: 695.93, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 110, date: '2019/06/18', indexValue: 694.83, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 111, date: '2019/06/19', indexValue: 709.85, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 112, date: '2019/06/20', indexValue: 752.38, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 113, date: '2019/06/21', indexValue: 763.68, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 114, date: '2019/06/24', indexValue: 761.69, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 115, date: '2019/06/25', indexValue: 763.19, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 116, date: '2019/06/26', indexValue: 746.47, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 117, date: '2019/06/27', indexValue: 757.61, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 118, date: '2019/06/28', indexValue: 754.98, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 119, date: '2019/07/01', indexValue: 771.91, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 120, date: '2019/07/02', indexValue: 764.58, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 121, date: '2019/07/03', indexValue: 750.94, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 122, date: '2019/07/04', indexValue: 751.67, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 123, date: '2019/07/05', indexValue: 750.8, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 124, date: '2019/07/08', indexValue: 731.31, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 125, date: '2019/07/09', indexValue: 736.87, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 126, date: '2019/07/10', indexValue: 735.39, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 127, date: '2019/07/11', indexValue: 735.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 128, date: '2019/07/12', indexValue: 738.12, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 129, date: '2019/07/15', indexValue: 752.81, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 130, date: '2019/07/16', indexValue: 749.22, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 131, date: '2019/07/17', indexValue: 746.94, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 132, date: '2019/07/18', indexValue: 736.43, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 133, date: '2019/07/19', indexValue: 751.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 134, date: '2019/07/22', indexValue: 733.28, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 135, date: '2019/07/23', indexValue: 737.45, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 136, date: '2019/07/24', indexValue: 742.91, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 137, date: '2019/07/25', indexValue: 746.19, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 138, date: '2019/07/26', indexValue: 742.53, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 139, date: '2019/07/29', indexValue: 731.1, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 140, date: '2019/07/30', indexValue: 737.67, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 141, date: '2019/07/31', indexValue: 733.94, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 142, date: '2019/08/01', indexValue: 724.11, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 143, date: '2019/08/02', indexValue: 699.92, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 144, date: '2019/08/05', indexValue: 685.12, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 145, date: '2019/08/06', indexValue: 680.88, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 146, date: '2019/08/07', indexValue: 669.96, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 147, date: '2019/08/08', indexValue: 679.1, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 148, date: '2019/08/09', indexValue: 670.21, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 149, date: '2019/08/12', indexValue: 685.22, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 150, date: '2019/08/13', indexValue: 676.59, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 151, date: '2019/08/14', indexValue: 677.65, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 152, date: '2019/08/15', indexValue: 677.08, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 153, date: '2019/08/16', indexValue: 678.68, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 154, date: '2019/08/19', indexValue: 725.03, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 155, date: '2019/08/20', indexValue: 719.64, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 156, date: '2019/08/21', indexValue: 717.41, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 157, date: '2019/08/22', indexValue: 716.38, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 158, date: '2019/08/23', indexValue: 713.35, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 159, date: '2019/08/26', indexValue: 702.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 160, date: '2019/08/27', indexValue: 715.41, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 161, date: '2019/08/28', indexValue: 705.75, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 162, date: '2019/08/29', indexValue: 701.63, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 163, date: '2019/08/30', indexValue: 698.6, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 164, date: '2019/09/02', indexValue: 714.04, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 165, date: '2019/09/03', indexValue: 715.48, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 166, date: '2019/09/04', indexValue: 727.86, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 167, date: '2019/09/05', indexValue: 748.54, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 168, date: '2019/09/06', indexValue: 755.4, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 169, date: '2019/09/09', indexValue: 765.44, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 170, date: '2019/09/10', indexValue: 767.57, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 171, date: '2019/09/11', indexValue: 774.2, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 172, date: '2019/09/12', indexValue: 785.27, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 173, date: '2019/09/16', indexValue: 773.54, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 174, date: '2019/09/17', indexValue: 751.63, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 175, date: '2019/09/18', indexValue: 746.64, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 176, date: '2019/09/19', indexValue: 752.29, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 177, date: '2019/09/20', indexValue: 748.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 178, date: '2019/09/23', indexValue: 736.88, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 179, date: '2019/09/24', indexValue: 737.81, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 180, date: '2019/09/25', indexValue: 732.34, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 181, date: '2019/09/26', indexValue: 722.91, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 182, date: '2019/09/27', indexValue: 727.95, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 183, date: '2019/09/30', indexValue: 711.09, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 184, date: '2019/10/08', indexValue: 706.52, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 185, date: '2019/10/09', indexValue: 708.29, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 186, date: '2019/10/10', indexValue: 713.84, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 187, date: '2019/10/11', indexValue: 727.16, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 188, date: '2019/10/14', indexValue: 737.65, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 189, date: '2019/10/15', indexValue: 728.24, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 190, date: '2019/10/16', indexValue: 725.01, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 191, date: '2019/10/17', indexValue: 721.35, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 192, date: '2019/10/18', indexValue: 705.2, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 193, date: '2019/10/21', indexValue: 698.52, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 194, date: '2019/10/22', indexValue: 702.85, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 195, date: '2019/10/23', indexValue: 697.28, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 196, date: '2019/10/24', indexValue: 700.2, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 197, date: '2019/10/25', indexValue: 708.34, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 198, date: '2019/10/28', indexValue: 718.94, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 199, date: '2019/10/29', indexValue: 703.54, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 200, date: '2019/10/30', indexValue: 697.49, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 201, date: '2019/10/31', indexValue: 696.89, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 202, date: '2019/11/01', indexValue: 706.34, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 203, date: '2019/11/04', indexValue: 707.29, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 204, date: '2019/11/05', indexValue: 716.93, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 205, date: '2019/11/06', indexValue: 709.07, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 206, date: '2019/11/07', indexValue: 712.68, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 207, date: '2019/11/08', indexValue: 703.05, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 208, date: '2019/11/11', indexValue: 689.69, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 209, date: '2019/11/12', indexValue: 691.67, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 210, date: '2019/11/13', indexValue: 684.54, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 211, date: '2019/11/14', indexValue: 685.04, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 212, date: '2019/11/15', indexValue: 677.62, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 213, date: '2019/11/18', indexValue: 686.56, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 214, date: '2019/11/19', indexValue: 692.3, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 215, date: '2019/11/20', indexValue: 681.08, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 216, date: '2019/11/21', indexValue: 681.4, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 217, date: '2019/11/22', indexValue: 679.23, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 218, date: '2019/11/25', indexValue: 682.86, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 219, date: '2019/11/26', indexValue: 683.3, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 220, date: '2019/11/27', indexValue: 677.45, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 221, date: '2019/11/28', indexValue: 677.1, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 222, date: '2019/11/29', indexValue: 680.03, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 223, date: '2019/12/02', indexValue: 684.91, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 224, date: '2019/12/03', indexValue: 689.48, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 225, date: '2019/12/04', indexValue: 687.42, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 226, date: '2019/12/05', indexValue: 698.26, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 227, date: '2019/12/06', indexValue: 701.25, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 228, date: '2019/12/09', indexValue: 700.13, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 229, date: '2019/12/10', indexValue: 698.72, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 230, date: '2019/12/11', indexValue: 699.6, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 231, date: '2019/12/12', indexValue: 695.6, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 232, date: '2019/12/13', indexValue: 721.75, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 233, date: '2019/12/16', indexValue: 733.71, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 234, date: '2019/12/17', indexValue: 754.23, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 235, date: '2019/12/18', indexValue: 756.52, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 236, date: '2019/12/19', indexValue: 752.84, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 237, date: '2019/12/20', indexValue: 755.75, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 238, date: '2019/12/23', indexValue: 736.57, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 239, date: '2019/12/24', indexValue: 744.18, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 240, date: '2019/12/25', indexValue: 745.15, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 241, date: '2019/12/26', indexValue: 764.65, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 242, date: '2019/12/27', indexValue: 748.12, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 243, date: '2019/12/30', indexValue: 791.09, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 244, date: '2019/12/31', indexValue: 788.03, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 245, date: '2020/01/02', indexValue: 793.18, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 246, date: '2020/01/03', indexValue: 792.17, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 247, date: '2020/01/06', indexValue: 792.61, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 248, date: '2020/01/07', indexValue: 797.97, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 249, date: '2020/01/08', indexValue: 772.17, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 250, date: '2020/01/09', indexValue: 784.73, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 251, date: '2020/01/10', indexValue: 785.84, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 252, date: '2020/01/13', indexValue: 796.25, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 253, date: '2020/01/14', indexValue: 786.08, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 254, date: '2020/01/15', indexValue: 782.31, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 255, date: '2020/01/16', indexValue: 777.92, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 256, date: '2020/01/17', indexValue: 781.02, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 257, date: '2020/01/20', indexValue: 793.16, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 258, date: '2020/01/21', indexValue: 778.12, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 259, date: '2020/01/22', indexValue: 784.03, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 260, date: '2020/01/23', indexValue: 750.09, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 261, date: '2020/02/03', indexValue: 675.16, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 262, date: '2020/02/04', indexValue: 674.23, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 263, date: '2020/02/05', indexValue: 684.04, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' },
  { index: 264, date: '2020/02/06', indexValue: 702.72, MCAD: null, Manipulate: '', indexNum: '', sellDate: "", sellIndexValue: '', sellProfit: '' }
];

var buyListData = [];
var buyDataIsEmpty = true;
var ema_5 =544.01;  //2019-01-02的数据
var ema_14 = 543.98;
var dea_2 = -12.53;

var shortDays = 5; //MCAD相关的参数
var longDays = 14;
var deaDays = 2;

var CurSelectIndex;

/*
var that = this;
wx.request({
  url: 'https://xxxxx',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'GET',
  success: function (res) {
    let dataList = res.data.result.data; //获取到数据
    dataList.forEach((item) => {
      item.date = item.date.substring(0, 10); //要截取时间的字符串
    })
    that.setData({
      order: dataList //数据源
    })
  }
}),
*/

Page({
  data: {
    strTips:"test",
    bshowTip: false,
    manipulateValue:0,
    buyTimes:0,
    mcadValue: 0,
    buyIndexAmount:0,
    winSum:0,
    totalBuyMoney:0,
    inputIndexValue:"",
    inputDate:"",
    iSingleBuySum:1000,
    listDataShow:[],
    listDataStored:[]
  },

  onLoad: function () {
    console.log('onLoad')

    if (wx.getStorageSync('storedListData')) {
      var award_result = JSON.parse(wx.getStorageSync('storedListData'));
      this.setData({
        listDataStored: award_result
      })
    }

    if (this.data.listDataStored.length > listData.length){
       listData = this.data.listDataStored;
    }

    //console.log("onload: show长度："+this.data.listDataShow.length.toString() + "， listData长度："+listData.length);
    
    this.showListData();

  },

//将listData的数据， 倒序显示
  showListData:function(){
    this.data.listDataShow = [];
    var length = listData.length;
    for (var i = length - 1; i >= 0; i--) {
      //console.log(i+"----"+listData[i]);
      this.data.listDataShow.push(listData[i]);
    }

    this.setData({
      'listDataShow': this.data.listDataShow,
    });
  },


//显示提示
  showTipOnTheTop: function (e) {
    this.setData({
      strTips: e,
      bshowTip: true,
    });

    // console.log(this.data.strTips + this.data.bshowTip);
  },

//隐藏提示
  hideTipOnTheTop: function (e) {
    this.setData({
      strTips: "",
      bshowTip: false,
    })
   // console.log(this.data.strTips + this.data.bshowTip);
  },
//输入日期
  bindDateInput:function(e){
    this.setData({
      inputDate:e.detail.value,
    });
    //console.log(this.data.inputDate);
  },

//输入指数
  bindIndexInput:function(e){
    var myDate = new Date();
    myDate = myDate.toLocaleDateString();
    this.setData({
      inputIndexValue: e.detail.value,
      inputDate:myDate,
    });
    //console.log(this.data.inputIndexValue);

  },

//根据点击的数据， 更新输入框的日期和收盘指数
  ViewTap:function(e){
    console.log("dataTap---"+e.target.dataset.num);
    CurSelectIndex= e.target.dataset.num -1;
    //console.log("curSel--" + CurSelectIndex);
    this.setData({
      "inputDate": this.data.inputDate = listData[CurSelectIndex].date,
      "inputIndexValue": this.data.inputIndexValue = listData[CurSelectIndex].indexValue,
    });

  },


//判断是否为数字
  isNumber:function(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
      return  true;
    } else  {
      return  false;
    }
  },

  //判断是否为日期字符串， 以/分隔
  isDate: function (val) {
    var myStr = val.split("/");
    //console.log("split--"+myStr);
    if(myStr.length == 3) {
      if (!this.isNumber(myStr[0]) || !this.isNumber(myStr[1]) || !this.isNumber(myStr[2]) ) {
        return false; //有非数字
      }
      var year = parseInt(myStr[0]);
      if(year < 1900 || year > 2050) { 
        return false;  //年份不在范围内
      }
      var month = parseInt(myStr[1]);
      if(month<1 || month>12){
        return false; //月份不对
      }
      //判断day数据是否准确
      var day = parseInt(myStr[2]);
      if(day <1 || day>31){
        return false;  //day 数据不对
      }
      switch(month){
        case 2:
          if((year%400==0) || (year%100!=0 && year%4==0)){
            if(day>29) { return false;} //闰年2月有29天
          } else {
            if(day>28) {return false;}  //平年2月有28天
          }
        break;
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
          if(day>31) {return false;} //大月份31天
        break;
        case 4: case 6: case 9: case 11:
          if (day > 30) { return false; } //小月份30天
        break;
      }
    } else {
      return false;
    }

    return true;

  },

//检查输入的指数和日期，格式是否正确
checkIndexAndDate:function(){
  /*
      var myDate = new Date();
      this.setData({
        inputDate: myDate.toLocaleDateString(),
      });
      console.log(myDate);
      console.log(this.data.inputDate);
  */

  if (!this.isNumber(this.data.inputIndexValue)) {  //转换后数据为NaN, 且不为零
    this.showTipOnTheTop("指数输入不正确!");
    return false;
    //console.log("2--" + getIndexValue);
  }

  if (!this.isDate(this.data.inputDate)) {
    this.showTipOnTheTop("日期输入不正确!");
    return false;
  }  

  return true;
},

//判断字符串是否为空
  isBlank:function(str){
    if(Object.prototype.toString.call(str) === '[object Undefined]'){//空
      return true
    } else if (
      Object.prototype.toString.call(str) === '[object String]' ||
      Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
      return str.length == 0 ? true : false
    } else if (Object.prototype.toString.call(str) === '[object Object]') {
      return JSON.stringify(str) == '{}' ? true : false
    } else {
      return true
    }
  },

//更新数据到列表中
  updateTap:function(e){
    this.hideTipOnTheTop();
 
    //测试
    /*
    var test = [{ i: 1, b: 2 }, { i: 2, b: 3 }];
    console.log(test);
    console.log("长度："+ test.length);
    test.splice(0, 1);
    console.log(test);
    console.log("长度：" + test.length);
    test.splice(0, 1);
    console.log(test);
    console.log("长度：" + test.length);

        //buyListData = null;

        if (!buyListData) {  //第一次进来，如果为null就要用赋值， 不能追加
            buyListData = [{ index: null, date: null, indexValue: null, exchangedIndexNum: null, money: null }];
        } else {
            var tempData = { index: null, date: null, indexValue: null, exchangedIndexNum: null, money: null }
            buyListData.push(tempData);  //保存买入信息
        }
        var k = buyListData.length;
        console.log(buyListData);
    */

    
    this.data.listDataStored = null;
    
    if (wx.getStorageSync('storedListData')) {
      var award_result = JSON.parse(wx.getStorageSync('storedListData'));
      this.setData({
        listDataStored: award_result
      })
    }

    if (this.data.listDataStored.length > listData.length) {
      listData = this.data.listDataStored;
    }

    console.log("点击了更新：show长度：" + this.data.listDataStored.length.toString() + "， listData长度：" + listData.length);

    if(!this.checkIndexAndDate()){
      return false;
    }else {
      //console.log(listData);
      listData[CurSelectIndex].date = this.data.inputDate;
      listData[CurSelectIndex].indexValue = this.data.inputIndexValue;
      //console.log("curSel--" + CurSelectIndex);
      this.showListData();
    }

  },

//将index和日期追加到 数据清单末尾
  addDataTap(e){
    //追加数据到ListData的末尾
    //最近一次的MCAD、操作、份数等留空
    this.hideTipOnTheTop();
    
    if(!this.checkIndexAndDate()){
      console.log("return");
      return false; //输入的日期、收盘数不对
    } else {
      var i = listData.length;  //手工index，从1开始
      //console.log(i);
      var newArray = [{
        index: i + 1, date: this.data.inputDate, indexValue: parseFloat(this.data.inputIndexValue), MCAD: null, BuyAmount: null, indexNum: null
      }];
      listData = listData.concat(newArray);
      CurSelectIndex = listData.length -1;
      //console.log("curSel--" + CurSelectIndex);
      //console.log(listData);
      this.showListData();
      return true;
    }

    // this.showTipOnTheTop("显示提示内容····");  //测试使用的
  },


    //计算MCAD 并更新当前操作结果
 caculateTap(e){
    //updateTap();
    this.caculateMCAD(e);  //更新全部的MCAD
    
    this.data.listDataStored = listData;
    wx.setStorageSync('storedListData', JSON.stringify(this.data.listDataStored));  //同步数据到缓存中
     
    //输出当前操作
    var curMCAD=0,   curIndexValue=0,  curDate=null,  sellDropGap=0.3,/*回落值*/ directSellValue=150;
    var curMCAD_MinusSum=0,sellGainIndexGap=25,/*卖出指数差值*/ buyBoundNum=0;/*买入边界值*/
    var lastMCAD=0, buyMinusSumThreshold=0, lastMaxMCAD=0, curMaxMCAD=0;
    this.setData({
      buyTimes:  0,
      totalBuyMoney: 0,
      winSum: 0
    });

    buyDataIsEmpty = true;   
    buyListData = null;   //不会改变数据内容，只是修改了数据长度 

    //console.log("for前--" + buyListData.length);
    //console.log(buyListData); 
     
    for(var i=0 ; i<listData.length; i++){
    //for (var i = 0; i < 50; i++) {
        curMCAD = parseFloat( listData[i].MCAD);
        curIndexValue = listData[i].indexValue;
        curDate = listData[i].date;
        if (curMCAD < buyBoundNum) { // 一般取边界为0
            curMCAD_MinusSum += curMCAD;  //如果MCAD小于零，进行累加
            lastMaxMCAD = 0;   //MCAD小于零进行累加
            curMaxMCAD = 0;
        }
    
      //console.log("curMCAD："+curMCAD+ "    lastMCAD:"+lastMCAD + "    负累计MCAD："+curMCAD_MinusSum);
      //买入判断，并做好记录
        listData[i].Manipulate = '';
        listData[i].indexNum = '';
        if (lastMCAD < buyBoundNum && curMCAD >= buyBoundNum && curMCAD_MinusSum < buyMinusSumThreshold){
            listData[i].Manipulate = "买入";
            listData[i].indexNum = parseFloat((this.data.iSingleBuySum/curIndexValue).toFixed(2));
            this.data.totalBuyMoney += parseFloat( this.data.iSingleBuySum);  //做好记录
            this.data.buyTimes += 1;
            this.data.manipulateValue = "买入1000";
            this.data.buyIndexAmount = listData[i].indexNum;
        
            if (!buyListData){  //第一次进来，如果为null就要用赋值， 不能追加
                buyListData = [{ index: null, date: null, indexValue: null, exchangedIndexNum: null, money: null }];
            } else {
                var tempData = { index: null, date: null, indexValue: null, exchangedIndexNum: null, money: null }
                buyListData.push(tempData);  //保存买入信息
            }

            var k = buyListData.length -1; //数据加到最后面
            buyListData[k].index = i;    //用于检索保存交易数据用
            buyListData[k].date = curDate;
            buyListData[k].indexValue = curIndexValue;
            buyListData[k].exchangedIndexNum = listData[i].indexNum;
            buyListData[k].money = this.data.iSingleBuySum;
            buyDataIsEmpty = false;  //保证第二次进来时，buyListData会追加新的数组对象
            //console.log("buyDataLength" + buyListData.length  );
            //console.log(buyListData);
        }
        //卖出判断
        if (buyListData  ) { 
            var curDateSellSum=0; 
            for(var j=0; j<(buyListData.length); j++){
            //console.log("lastMax:"+lastMaxMCAD+"   MAX:"+curMaxMCAD+"  curIndex:"+curIndexValue);

                //console.log("curDate:" + curDate+ "  curIndexValue:" + curIndexValue + " buyListData[j].indexValue: " + buyListData[j].indexValue + "  sellGainIndexGap:" + sellGainIndexGap);
                
                if (((lastMaxMCAD - curMCAD > sellDropGap)&&(curIndexValue - buyListData[j].indexValue > sellGainIndexGap) && (curMCAD > 0)) || 
                    (curIndexValue - buyListData[j].indexValue > directSellValue)) {
                    var iTemp = buyListData[j].index;
                    curDateSellSum += (curIndexValue * buyListData[j].exchangedIndexNum) ;
                    //listData[i].indexNum = buyListData[j].exchangedIndexNum;
                    listData[iTemp].sellDate = curDate;
                    listData[iTemp].sellIndexValue = buyListData[j].indexValue;
                    listData[iTemp].sellProfit = (curIndexValue -  buyListData[j].indexValue) * buyListData[j].exchangedIndexNum;
                    this.data.winSum += parseFloat(listData[iTemp].sellProfit);  
                    this.data.totalBuyMoney -= parseFloat(this.data.iSingleBuySum);
                    
                    //console.log("卖出前:"+j + "   buyListData：" + buyListData.length + "买入日期："+buyListData[j].date);
                    //console.log(buyListData);
                    buyListData.splice(j,1);
                    j--;

                    if (!buyDataIsEmpty) {
                        for (var m = 0; m < buyListData.lastIndexOf; m++) {
                        console("buydata:" + m);
                        console(buyListData[m]);
                        }
                    }

                    //this.showBuyList();
                    //console.log("卖出后:" + j + "   buyListData：" + buyListData.length + "买入日期：" + buyListData[j].date);
                    //console.log(buyListData);
                    //this.buyListDataDeleteAt(j);
                }
            }
            if(curDateSellSum>0){
                listData[i].Manipulate = "卖出" + curDateSellSum.toFixed(2);
                listData[i].indexNum = (-curDateSellSum/curIndexValue).toFixed(2);
            }

        
        }
        
        //在循环尾部进行数据更新
        lastMCAD = curMCAD;
        if (curMCAD > 0) {
            curMCAD_MinusSum = 0;
            if (curMCAD > curMaxMCAD) {
                lastMaxMCAD = curMaxMCAD;
                curMaxMCAD = curMCAD;
            }

        }
    }

    //console.log(this.data.buyTimes);
    //完成循环后，输出数据到界面, 减去2019年本身的数据
    this.setData({
      winSum:(this.data.winSum - 2401.88).toFixed(2),
      totalBuyMoney: this.data.totalBuyMoney - 7000,
      buyTimes: this.data.buyTimes-31,
      mcadValue: curMCAD,
      manipulateValue:this.data.manipulateValue,
      buyIndexAmount: this.data.buyIndexAmount,
    });

    wx.showToast({
      title: '计算完成',
      duration:2000
    });

    this.showListData();   // 倒序显示MCAD
  },

  //在console中显示 buyList
  showBuyList(e) {
    if(!buyDataIsEmpty) {
      for(var i=0; i<buyListData.lastIndexOf; i++){
        console("buydata:"+i);
        console(buyListData[i]);
      }

    }

  },

  //删除数组指定元素
  buyListDataDeleteAt: function(e){
    if (!buyListData || buyListData.length < e ) {
      return false;
    }

    if(buyListData.length == 1) {
      buyListData = [{ index: null, date: null, indexValue: null, exchangedIndexNum: null, money: null }];
      buyDataIsEmpty = true;
      return true;
    }

    if(index == buyListData.length -1){
      buyListData.slice();
    }
    

    var i, k=0;
    var temp = [{ index: null, date: null, indexValue: null, exchangedIndexNum: null, money: null }];
    for (i = index; i < buyListData.length-1; i++) {
      buyListData[i] = buyListData[i+1];
    }
    console.log( buyListData);
    buyListData = temp;
    console.log("temp")
    console.log(temp);
    console.log("listdata")
    console.log(buyListData);
    
    return true;
  },

  //更新全部的MCAD的值
  caculateMCAD: function(e){
    //更新ListData数据全部的MCAD值， 累计买入和份数只更新最近一次的
    var lastShortEMA = ema_5;
    var lastLongEMA  = ema_14;
    var lastDEA = dea_2;
    var curShortEMA, curLongEMA, curDIF, curDEA,curMCAD;

    for(var i =1; i< listData.length; i++){
      curShortEMA = lastShortEMA * (shortDays - 1) / (shortDays + 1) + parseFloat(listData[i].indexValue) * 2 / (shortDays+1);
      curLongEMA = lastLongEMA * (longDays - 1) / (longDays + 1) + parseFloat(listData[i].indexValue) * 2 / (longDays + 1);
      curDIF = curShortEMA - curLongEMA;
      curDEA = lastDEA* (deaDays -1) /(deaDays + 1) + curDIF * 2/ (deaDays + 1);
      curMCAD = (curDIF - curDEA) * 2;

      lastShortEMA = curShortEMA;
      lastLongEMA = curLongEMA;
      lastDEA = curDEA;

      listData[i].MCAD = curMCAD.toFixed(2);
      //console.log(i.toFixed(2).toString() + "," + curShortEMA.toFixed(2).toString() + "," + curLongEMA.toFixed(2).toString() + "," + curDIF.toFixed(2).toString() + "," + curDEA.toFixed(2).toString() + "," + curMCAD.toFixed(2).toString());
    }

  },


//测试用
  TestTap(e){
    //var listDataShow;
    //console.log(listDataShow);
    //console.log(e);
    var length = listData.length;
    var i = listData[length-1].index + 1;
    var newArray = [{
      index: i, date: "2020/02/23", indexValue: "1564.07", MCAD: "32.23", BuyAmount: 10000, indexNum: 1.2
    }];
     
    listData = listData.concat(newArray);
    this.data.listDataShow = [];
    length = listData.length;
    for (var i = length-1; i>=0; i-- )
    {
       //console.log(i+"----"+listData[i]);
       this.data.listDataShow.push(listData[i]);
    }

    this.setData({
      'listDataShow': this.data.listDataShow,
   
    });

    //this.data.listData.reverse() ;

    console.log(this.data.listDataShow);

    console.log(listData);

  }

  

})