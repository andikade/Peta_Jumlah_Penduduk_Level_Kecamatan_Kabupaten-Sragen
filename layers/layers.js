var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sragenq_1 = new ol.format.GeoJSON();
var features_sragenq_1 = format_sragenq_1.readFeatures(json_sragenq_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sragenq_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sragenq_1.addFeatures(features_sragenq_1);
var lyr_sragenq_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sragenq_1, 
                style: style_sragenq_1,
                popuplayertitle: 'sragen q',
                interactive: true,
                title: '<img src="styles/legend/sragenq_1.png" /> sragen q'
            });
var format_joinsrgn_2 = new ol.format.GeoJSON();
var features_joinsrgn_2 = format_joinsrgn_2.readFeatures(json_joinsrgn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_joinsrgn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_joinsrgn_2.addFeatures(features_joinsrgn_2);
var lyr_joinsrgn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_joinsrgn_2, 
                style: style_joinsrgn_2,
                popuplayertitle: 'join srgn',
                interactive: true,
    title: 'join srgn<br />\
    <img src="styles/legend/joinsrgn_2_0.png" /> 23348<br />\
    <img src="styles/legend/joinsrgn_2_1.png" /> 28269<br />\
    <img src="styles/legend/joinsrgn_2_2.png" /> 29355<br />\
    <img src="styles/legend/joinsrgn_2_3.png" /> 33391<br />\
    <img src="styles/legend/joinsrgn_2_4.png" /> 37172<br />\
    <img src="styles/legend/joinsrgn_2_5.png" /> 37375<br />\
    <img src="styles/legend/joinsrgn_2_6.png" /> 41295<br />\
    <img src="styles/legend/joinsrgn_2_7.png" /> 42468<br />\
    <img src="styles/legend/joinsrgn_2_8.png" /> 46747<br />\
    <img src="styles/legend/joinsrgn_2_9.png" /> 48325<br />\
    <img src="styles/legend/joinsrgn_2_10.png" /> 49265<br />\
    <img src="styles/legend/joinsrgn_2_11.png" /> 51098<br />\
    <img src="styles/legend/joinsrgn_2_12.png" /> 51480<br />\
    <img src="styles/legend/joinsrgn_2_13.png" /> 53298<br />\
    <img src="styles/legend/joinsrgn_2_14.png" /> 56828<br />\
    <img src="styles/legend/joinsrgn_2_15.png" /> 58055<br />\
    <img src="styles/legend/joinsrgn_2_16.png" /> 66890<br />\
    <img src="styles/legend/joinsrgn_2_17.png" /> 69566<br />\
    <img src="styles/legend/joinsrgn_2_18.png" /> 72935<br />\
    <img src="styles/legend/joinsrgn_2_19.png" /> 74581<br />\
    <img src="styles/legend/joinsrgn_2_20.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_sragenq_1.setVisible(true);lyr_joinsrgn_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sragenq_1,lyr_joinsrgn_2];
lyr_sragenq_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'sragen responsi mini_FID': 'sragen responsi mini_FID', 'sragen responsi mini_JUMLAH_PENDUDUK': 'sragen responsi mini_JUMLAH_PENDUDUK', 'sragen responsi mini_LAKI_LAKI': 'sragen responsi mini_LAKI_LAKI', 'sragen responsi mini_PEREMPUAN': 'sragen responsi mini_PEREMPUAN', });
lyr_joinsrgn_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'sragen res': 'sragen res', 'sragen r_1': 'sragen r_1', 'sragen r_2': 'sragen r_2', 'sragen r_3': 'sragen r_3', });
lyr_sragenq_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'sragen responsi mini_FID': 'TextEdit', 'sragen responsi mini_JUMLAH_PENDUDUK': 'TextEdit', 'sragen responsi mini_LAKI_LAKI': 'TextEdit', 'sragen responsi mini_PEREMPUAN': 'TextEdit', });
lyr_joinsrgn_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'sragen res': 'TextEdit', 'sragen r_1': 'TextEdit', 'sragen r_2': 'TextEdit', 'sragen r_3': 'TextEdit', });
lyr_sragenq_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'sragen responsi mini_FID': 'no label', 'sragen responsi mini_JUMLAH_PENDUDUK': 'no label', 'sragen responsi mini_LAKI_LAKI': 'no label', 'sragen responsi mini_PEREMPUAN': 'no label', });
lyr_joinsrgn_2.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'sragen res': 'no label', 'sragen r_1': 'no label', 'sragen r_2': 'no label', 'sragen r_3': 'no label', });
lyr_joinsrgn_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});