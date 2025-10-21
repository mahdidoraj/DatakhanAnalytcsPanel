import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

@Component({
	selector: 'ws-map-geo',
	standalone:false,
	template: `<div class="ws-card"><div id="ws-map" style="height:380px;border-radius:16px;overflow:hidden"></div></div>`
})
export class WsMapGeoComponent implements AfterViewInit, OnChanges {
	@Input() points: {lat:number; lng:number; sentiment?: 'positive'|'neutral'|'negative'}[] = [];
	private map?: L.Map;
	private layer?: L.LayerGroup;

	ngAfterViewInit(){
		this.map = L.map('ws-map', { center: [35.6892,51.3890], zoom: 5 });
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution: '&copy; OSM' }).addTo(this.map);
		this.layer = L.layerGroup().addTo(this.map);
		this.render();
	}
	ngOnChanges(ch:SimpleChanges){ if(this.map) this.render(); }
	private render(){
		this.layer?.clearLayers();
		this.points.forEach(p => {
			const color = p.sentiment==='positive'?'green':p.sentiment==='negative'?'red':'gray';
			const marker = L.circleMarker([p.lat,p.lng], { radius: 6, color, weight: 2, fillOpacity: .6 });
			marker.addTo(this.layer!);
		});
	}
}
