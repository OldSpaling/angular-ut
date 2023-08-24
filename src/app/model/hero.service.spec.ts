import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HeroService } from './hero.service';
import {faker} from '@faker-js/faker';
describe(HeroService.name, () => {
  let service: HeroService;
  let httpMock: HttpTestingController;
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HeroService],
  });
  service = TestBed.inject(HeroService);
  httpMock = TestBed.inject(HttpTestingController);
  describe(HeroService.prototype.getHeroes.name, () => {
    it('should return expect result by get', () => {
      const heroes = [
        { id: faker.number.int(), name: faker.internet.userName()},
        { id: faker.number.int(), name: faker.internet.userName() },
      ];
      service.getHeroes().subscribe((h) => {
        expect(h.length).toBe(heroes.length);
        expect(h[0].id).toBe(heroes[0].id);
        expect(h[0].name).toBe(heroes[0].name);
        expect(h[1].id).toBe(heroes[1].id);
        expect(h[1].name).toBe(heroes[1].name);
      });
      const req = httpMock.expectOne('api/heroes');
      expect(req.request.method).toBe('GET');
      req.flush(heroes);
    });
    it('request method error,should throw error', () => {});
    it('response body error,should throw error', () => {});
    it("response body is not array,should throw error", () => {});
    it("response body's length is 0,should throw error", () => {});
  });
  describe(HeroService.prototype.getHero.name, () => {});
  describe(HeroService.prototype.addHero.name, () => {});
  describe(HeroService.prototype.deleteHero.name, () => {});
  describe(HeroService.prototype.updateHero.name, () => {});
});
